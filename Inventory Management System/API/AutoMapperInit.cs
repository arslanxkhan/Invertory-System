using AutoMapper;
using Models.DB;
using Models.Dto;

namespace API
{
    public class AutoMapperInit
    {
        public static IMapper InitMappings()
        {
            var config = new MapperConfiguration(cfg =>
            {
                AddMap<Products, ProductDto>(cfg);
                AddMap<Sales, SalesDto>(cfg);
                AddMap<Purchases, PurchasesDto>(cfg);

            });
            return new Mapper(config);
        }

        private static void AddMap<TSource, TDest>(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<TSource, TDest>();
            cfg.CreateMap<TDest, TSource>();

        }
    }
}
