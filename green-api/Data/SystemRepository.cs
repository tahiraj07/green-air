using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 
using green_api.Models;

namespace green_api.Data
{
    public class SystemRepository : ISystemRepository
    {
        private readonly DataContext _context;
        public SystemRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
 
          public async Task<IEnumerable<Main_forms>> GetForms(string Section)
        {
          var form = await _context.Forms.Where(s => s.class_v == Section).OrderByDescending(m => m.Id).ToListAsync();

          return form;
        }

        public async Task<Main_forms> GetForm(int id)
        {
            return await _context.Forms.FirstOrDefaultAsync(m => m.Id == id);
        }
         public async Task<bool> SaveALL()
        {
            return await _context.SaveChangesAsync() > 0;
        }

         public async Task<int> UpdateID(int f_id)
        {
             var latestStudentRecord = _context.Forms
                .OrderByDescending(a => a.submission_id)
                .First();
                f_id = latestStudentRecord.submission_id;
           if(await _context.Forms.AnyAsync(x => x.submission_id.Equals(f_id))){
            return f_id = (f_id + 1);
           }   
           else {
            return f_id = 100;
           }     
        }
    }
}