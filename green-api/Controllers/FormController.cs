
using green_api.Data;
using green_api.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using green_api.Models;
using Microsoft.Extensions.Options;
using green_api.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions; 
using System.IO;
using OfficeOpenXml;

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
        public async Task<IActionResult> GetForms(string Section)
        {
            var form = await _repo.GetForms(Section);

            return Ok(form);
        }

        [HttpGet("{id}")]
        public async  Task<IActionResult> GetForm(int id)
        {
             var dataFromRepo = await _repo.GetForm(id);

            if(dataFromRepo == null)
                    return NotFound();

            return Ok(dataFromRepo);  
        }

        //save
        [HttpPost]
        [Obsolete]
        public async Task<IActionResult> AddForm([FromForm]FormtoCreateDto formToCreate)
        { 
            //id
            var f_id = "THG-WKDZ-100";
            var n_id = f_id.Substring(f_id.Length - 3);
            var sh_id = f_id.Remove(f_id.Length - 3);
            int result = Int32.Parse(n_id);
            formToCreate.submission_id = await _repo.UpdateID(result);
            formToCreate.unique_id = sh_id+formToCreate.submission_id;


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

        [HttpPost("{import}")]
        public async Task<List<FormtoCreateDto>> ImportForms(IFormFile file)
        { 
            var list = new List<FormtoCreateDto>();
            using(var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                using(var package = new ExcelPackage(stream)){
                    ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                    var rowcount = worksheet.Dimension.Rows;
                    for(int row =2; row <= rowcount; row++)
                    {
                        list.Add(new FormtoCreateDto {
                            submission_id = int.Parse(worksheet.Cells[row,20].Value.ToString().Trim()),
                             option =worksheet.Cells[row,1].Value.ToString().Trim(),
                              name = worksheet.Cells[row,3].Value.ToString().Trim(),
                               surname = worksheet.Cells[row,4].Value.ToString().Trim(),
                                email = worksheet.Cells[row,5].Value.ToString().Trim(),
                                 company = worksheet.Cells[row,6].Value.ToString().Trim(),
                                  company_id = worksheet.Cells[row,7].Value.ToString().Trim(),
                                   price = worksheet.Cells[row,8].Value.ToString().Trim(),
                                    payee = worksheet.Cells[row,9].Value.ToString().Trim(),
                                     iban = worksheet.Cells[row,10].Value.ToString().Trim(),
                                      gift_code = worksheet.Cells[row,11].Value.ToString().Trim(),
                                       url = worksheet.Cells[row,12].Value.ToString().Trim(),
                                       url1 = worksheet.Cells[row,13].Value.ToString().Trim(),
                                       time = worksheet.Cells[row,14].Value.ToString().Trim(),
                                       agb = worksheet.Cells[row,16].Value.ToString().Trim(),
                                       terms = worksheet.Cells[row,17].Value.ToString().Trim()
                        });
                    } 
                }
            }
            return list;
        }
    }
}
