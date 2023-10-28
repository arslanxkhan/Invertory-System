using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.DB
{
    [Table("Purchases")]
    public class Purchases : BaseModel<long>
    {
        // it can be sparate suppler table for handle supplier things
        [Required(ErrorMessage = "Supplier name is required")]
        public string SupplierName { get; set; }


        [Required(ErrorMessage = "Supplier phonenumber is required")]
        public string SupplierNumber { get; set; }

        [Required(ErrorMessage = "Quantity of product is required")]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than 0")]
        public int Quantity { get; set; }

        [Required(ErrorMessage = "Delivery date is required")]
        [DataType(DataType.DateTime)]
        public DateTime DeliveryDate { get; set; }

        [ForeignKey(nameof(Products))]
        public long ProductId { get; set; }
        public virtual Products Products { get; set; }
    }
}
