﻿using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class TarefaDomain
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string? Title { get; set; }

        [StringLength(500)]
        public string? Description { get; set; }

        public bool IsCompleted { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? CompletedAt { get; set; }
    }
}
