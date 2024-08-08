using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dto
{
    public class TarefaCreateDto
    {
        public string? Title { get; set; }

        public string? Description { get; set; }

        public bool? IsCompleted { get; set; }

    }
}
