using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.DB
{
    [Table("Products")]
    public class Products : BaseModel<long>
    {
        [Required(ErrorMessage = "Product name is required")]
        public string Name { get; set; }
        public string Description { get; set; }


        // is column is only use when user buy the product to remaining items
        // it is automaticlly added when new purchases add for this product
        public int Quantity { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
        public virtual ICollection<Purchases> Purchases { get; set; }
    }
}
