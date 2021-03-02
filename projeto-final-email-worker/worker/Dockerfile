FROM python:3.6
LABEL mainteiner 'Aluno'

# Não utiliza buffer
ENV PYTHONUNBUFFERED 1
# Instala o redis
RUN pip install redis==2.10.5

ENTRYPOINT ["/usr/local/bin/python"]