using System.ComponentModel.DataAnnotations;

namespace Models.Dto
{
    public class ProductDto : BaseModel<long>
    {
        [Required(ErrorMessage = "Product name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Description is required")]

        public string Description { get; set; }

        public int? Quantity { get; set; }
    }
}
