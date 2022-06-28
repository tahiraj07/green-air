using green_api.Models;

namespace green_api.Data
{
    public interface ISystemRepository
    {
        void Add<T> (T entity) where T: class;
        void Delete<T> (T entity) where T: class; 
        Task<bool> SaveALL();   
        Task <IEnumerable<Main_forms>> GetForms(string Section);
        Task<int> UpdateID(int f_id); 
        Task<Main_forms> GetForm(int id);
    }
}