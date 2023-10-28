namespace Data.Services
{
    public interface ICurdService<TModel, TDto, TKey>
    {
        TModel Get(TKey id);
        List<TDto> GetAll();
        Task<TKey> Add(TDto dto);
        Task<bool> Update(TDto dto);

        Task<bool> Delete(TKey id);

    }
}
