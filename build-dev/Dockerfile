FROM python:3.6
LABEL Mantenedor 'aluno'

# comandos agrupados para gerar única layer
# utilização de & para concatenar vários comandos Bash no Run

# cria usuário www
# cria diretórios
# define owner do diretório log como www
# Todos os comandos executados no Bash do CONTAINER
RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

# define usuário ativo
USER www
# define volume
# volume do Conteiner é a pasta log
# seu par será definido no build 
VOLUME /log    
# define diretório de trabalho
WORKDIR /app
# expõe a porta
# será remapeada no start do container
EXPOSE 8000

# ponto de entrada
# processo que será executado quando o container for executado
# Invoca o python e através do python executa o run
ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]