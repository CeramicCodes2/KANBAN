import json
from os import listdir,getcwd
from os.path import join
from logging import log,basicConfig

class FileMerger:
  def loadJsonFile(self):
    try:
      self.content:dict[str,str] = json.loads(self.file.read())
    except Exception as e:
      print(f"Error: {e}")
  def saveDocument(self):
    self.file.write(json.dumps(self.content))
  def locateDocument(self):
    cdir:list[str] = listdir(join(getcwd(),documents))
    if not(f"{self.username}.json" in listdir(join(getcwd(),documents))):
      #@('File not found')

      return cdir.index(f"{self.username}.json")



  def __init__(self,username:str):

    self.username = username
    self.file = open(username)
  def __enter__(self):
    return self

  def __exit__(self, exc_type, exc_val, exc_tb):
    # make sure the dbconnection gets closed
    self.file.close()
