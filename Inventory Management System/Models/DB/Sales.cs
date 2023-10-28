using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.DB
{
    [Table("Sales")]
    public class Sales : BaseModel<long>
    {
        // it can be separate customer table for handle all customer things

        [Required(ErrorMessage = "Customer name is required")]
        public string CustomerName { get; set; }

        [Required(ErrorMessage = "Customer email is required")]

        public string CustomerEmail { get; set; }

        [ForeignKey(nameof(Products))]
        public long ProductId { get; set; }

        public virtual Products Products { get; set; }



        [Required(ErrorMessage = "Quantity of product is required")]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than 0")]
        public int Quantity { get; set; }



        [Required(ErrorMessage = "Price of product is required")]
        [Range(1, int.MaxValue, ErrorMessage = "Price must be greater than 0")]
        public double TotalPrice { get; set; }

    }
}
