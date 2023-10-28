using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services.DataService
{
    public interface IRepository<TModel, TKey> where TModel : class
    {

        List<TModel> GetAll();
        TModel Add(TModel model);
        void Update(TModel model);

        Task<TModel> Get(TKey id);
        void Delete(TModel model);

        public bool Any(Expression<Func<TModel, bool>> expression);

        Task<List<TModel>> GetAll(Expression<Func<TModel, bool>> expression);

        Task<TModel> Get(Expression<Func<TModel, bool>> expression);
    }
}
