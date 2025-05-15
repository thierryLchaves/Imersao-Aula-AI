def eh_bissexto(ano):
  """
  Essa funçãozinha me diz se um ano é bissexto ou não.
  É como perguntar para um amigo se o coelhinho vai ter um dia extra!
  """
  if ano % 4 == 0:
    if ano % 100 == 0:
      if ano % 400 == 0:
        return True # Sim, é bissexto! O coelhinho ganha mais um dia!
      else:
        return False # Não, não é bissexto.
    else:
      return True # Sim, é bissexto!
  else:
    return False # Não, não é bissexto.

# Agora, vamos perguntar para alguns anos!
ano1 = 2024
ano2 = 1900
ano3 = 2000

print(f"O ano {ano1} é bissexto? {eh_bissexto(ano1)}")
print(f"O ano {ano2} é bissexto? {eh_bissexto(ano2)}")
print(f"O ano {ano3} é bissexto? {eh_bissexto(ano3)}")