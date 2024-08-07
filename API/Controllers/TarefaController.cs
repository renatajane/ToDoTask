using Application.Dto;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TarefaController : ControllerBase
    {
        private readonly ITarefaService tarefaService;

        public TarefaController(ITarefaService tarefaService)
        {
            this.tarefaService = tarefaService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TarefaReadDto>>> Get()
        {
            var dtos = await tarefaService.GetAll();
            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<TarefaReadDto>> GetById(int id)
        {
            var dtos = await tarefaService.GetById(id);
            return Ok(dtos);
        }

        [HttpPost]
        public async Task<ActionResult> Create(TarefaCreateDto tarefaCreateDto)
        {
            await tarefaService.Create(tarefaCreateDto);
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(TarefaCreateDto tarefaCreateDto, int id)
        {
            await tarefaService.Update(tarefaCreateDto, id);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            await tarefaService.DeleteById(id);
            return Ok();
        }

    }
}
