def download_file(self,file_id, filename):
try:  
  URL = f"https://drive.google.com/uc?export=download&id={file_id}&confirm=yes"
  
  if 'BaseConveniados'.lower in filename.lower: # incluindo a data no arquivo base coveniados
    response = wget.download(URL, File().gerar_nome(filename))
  else:
    response = wget.download(URL, filename)
except Exception as e:
  logger.error(f"Nao foi possivel baixar o arquivo - {e}")