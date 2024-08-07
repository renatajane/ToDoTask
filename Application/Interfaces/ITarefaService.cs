using Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ITarefaService
    {
        Task<IEnumerable<TarefaReadDto>> GetAll();

        Task<TarefaReadDto> GetById(int id);

        Task Create(TarefaCreateDto task);

        Task Update(TarefaCreateDto task, int id);

        Task DeleteById(int id);
    }
}
