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
 
          public async Task<IEnumerable<Main_forms>> GetForms()
        {
          var form = await _context.Forms.ToListAsync();

          return form;
        }

         public async Task<bool> SaveALL()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}