using API;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Data.Services;
using Data.Services.DataService;
using Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);


builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

var Configuration = builder.Configuration;
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Host.ConfigureContainer<ContainerBuilder>(
   builder =>
   {
       var opt = new Microsoft.EntityFrameworkCore.DbContextOptionsBuilder<DBContext>();
       opt.UseLazyLoadingProxies();
       opt.UseSqlServer(Configuration.GetConnectionString("con"));


       builder.Register(c =>
       {
           return new DBContext(opt.Options);
       }).InstancePerLifetimeScope();

       builder.RegisterType<BaseService>().PropertiesAutowired();

       builder.RegisterAssemblyTypes(Assembly.Load("Data")).Where(z => z.Name.EndsWith("Service")).AsImplementedInterfaces().PropertiesAutowired();

       builder.RegisterGeneric(typeof(Repository<,>)).As(typeof(IRepository<,>));

       builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().PropertiesAutowired();

       var mapper = AutoMapperInit.InitMappings();
       builder.RegisterInstance(mapper).SingleInstance();

   });

builder.Services.AddCors(options =>
{
    options.AddPolicy("IMS_cors",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("IMS_cors");
app.MapControllers();

app.Run();
