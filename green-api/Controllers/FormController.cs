
using green_api.Data;
using green_api.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using green_api.Models;
using Microsoft.Extensions.Options;
using green_api.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace green_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormController : ControllerBase
    {
        private readonly ISystemRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryCongif;
        private Cloudinary _cloudinary;
        public FormController(ISystemRepository repo, IMapper mapper,
         IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryCongif = cloudinaryConfig;
            _mapper = mapper;
            _repo = repo;

            Account acc = new Account(
                  _cloudinaryCongif.Value.CloudName,
                  _cloudinaryCongif.Value.ApiKey,
                  _cloudinaryCongif.Value.ApiSecret
              );
            _cloudinary = new Cloudinary(acc);
        }

        // GET
        [HttpGet]
        public async Task<IActionResult> GetForms()
        {
            var form = await _repo.GetForms();

            return Ok(form);
        }

        // [HttpGet("{id}")]
        // public async  Task<IActionResult> GetForm(int id)
        // {
        //     var data = await _context.Forms.FirstOrDefaultAsync(x => x.Id == id);
        //     return Ok(data);
        // }

        //save
        [HttpPost]
        [Obsolete]
        public async Task<IActionResult> AddForm([FromForm]FormtoCreateDto formToCreate)
        {
            var file1 = formToCreate.image1;

            var file2 = formToCreate.image2;

            var uploadResult = new ImageUploadResult();
            var uploadResult1 = new ImageUploadResult();
            
            if (file1?.Length > 0)
            {
                using (var stream = file1.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file1.Name, stream),
                        Transformation = new Transformation()
                            .Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            if (file2?.Length > 0)
            {
                using (var stream = file2.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file2.Name, stream),
                        Transformation = new Transformation()
                            .Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    uploadResult1 = _cloudinary.Upload(uploadParams);
                }
            }

            formToCreate.url = uploadResult.Uri?.ToString();
            formToCreate.url1 = uploadResult.Uri?.ToString();
            formToCreate.PublicId = uploadResult?.PublicId;


            var form = _mapper.Map<Main_forms>(formToCreate);

            _repo.Add(form);

            if (await _repo.SaveALL())
            {
                return Ok();
            }

            throw new System.Exception("Creating the form failed on save");
        }
    }
}
