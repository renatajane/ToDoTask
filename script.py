import psycopg2
import pandas as pd

# Configuração da conexão com o banco de dados
try:
    conn = psycopg2.connect(
        host="localhost",
        database="dbPostgreSql",
        user="admin",
        password="adminpass"
    )
    print("Conexão bem-sucedida!")

    # Criar um cursor para executar comandos SQL
    cursor = conn.cursor()

    # 1. Ler todas as tarefas da tabela Tarefa
    query = 'SELECT "Id", "Title", "Description", "IsCompleted", "CreatedAt", "CompletedAt" FROM "Tarefa"'
    cursor.execute(query)
    tasks = cursor.fetchall()

    # Converter os resultados em um DataFrame do Pandas para fácil manipulação
    df = pd.DataFrame(tasks, columns=['ID', 'Title', 'Description', 'Is Completed', 'Created At', 'Completed At'])

    # 2. Filtrar tarefas que estão marcadas como concluídas
    completed_tasks = df[df['Is Completed'] == True]
    print("Tarefas Concluídas:")
    print(completed_tasks)

    # 3. Exportar as tarefas não concluídas para um arquivo CSV
    incomplete_tasks = df[df['Is Completed'] == False]
    incomplete_tasks.to_csv('tarefas_nao_concluidas.csv', index=False, sep=',')

except psycopg2.Error as e:
    print(f"Erro ao conectar ao banco de dados: {e}")

finally:
    # Fechar a conexão com o banco de dados se estiver aberta
    if conn:
        cursor.close()
        conn.close()
        print("Conexão com o banco de dados fechada.")