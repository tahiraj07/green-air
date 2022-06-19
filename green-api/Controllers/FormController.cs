
using green_api.Data;
using green_api.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using green_api.Models;

namespace green_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormController : ControllerBase
    {
        private readonly ISystemRepository _repo;
        private readonly IMapper _mapper; 
        public FormController(ISystemRepository repo, IMapper mapper)
        {
             _mapper = mapper;
            _repo = repo;
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
        public async Task<IActionResult> AddForm(FormtoCreateDto formToCreate)
        { 
            var form = _mapper.Map<Main_forms>(formToCreate);   

            _repo.Add(form);

            if (await _repo.SaveALL()){
                return Ok();
            }

             throw new System.Exception("Creating the form failed on save");            
        }
    }
}
