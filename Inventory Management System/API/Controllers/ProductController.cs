using Data.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : BaseController
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        [Route("all")]
        public ActionResult<List<ProductDto>> GetAll()
        {
            var res = productService.GetAll();
            return Ok(res);
        }


        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add(ProductDto product)
        {
            if (product is null) return BadRequest("Product not found");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var res = await productService.Add(product);
            return res > 0 ? Ok() : BadRequest("Something went worng");
        }


        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> Update(ProductDto product)
        {
            if (product is null) return BadRequest("Product not found");

            var res = await productService.Update(product);
            return res ? Ok() : BadRequest("Something went worng");
        }


        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> Delete(long Id)
        {
            if (Id == 0) return BadRequest("Product not found");

            var res = await productService.Delete(Id);
            return res ? Ok() : BadRequest("Something went worng");
        }

    }
}
