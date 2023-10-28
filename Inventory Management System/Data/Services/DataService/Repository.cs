using Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services.DataService
{
    public class Repository<TModel, TKey> : IRepository<TModel, TKey> where TModel : class
    {
        private readonly DBContext _db;
        private DbSet<TModel> table { get; set; }


        public Repository(DBContext dB)
        {
            this._db = dB;
            table = dB.Set<TModel>();
        }


        public TModel Add(TModel model)
        {
            return table.Add(model).Entity;
        }

        public bool Any(Expression<Func<TModel, bool>> expression)
        {
            return table.Any(expression);
        }


        public List<TModel> GetAll()
        {
            return table.ToList();
        }

        public async Task<List<TModel>> GetAll(Expression<Func<TModel, bool>> expression)
        {
            return await table.Where(expression).ToListAsync();
        }


        public async Task<TModel> Get(TKey id)
        {
            return await table.FindAsync(id);
        }


        public async Task<TModel> Get(Expression<Func<TModel, bool>> expression)
        {
            return await table.FirstOrDefaultAsync(expression);
        }


        public void Update(TModel model)
        {
            table.Update(model);
        }


        public void Delete(TModel model)
        {
            table.Remove(model);
        }





    }
}
