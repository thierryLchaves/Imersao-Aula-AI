def eh_bissexto(ano):
  """Verifica se um ano é bissexto.

  Args:
    ano: Um número inteiro representando o ano.

  Returns:
    True se o ano for bissexto, False caso contrário.
  """
  if ano % 4 != 0:
    return False
  elif ano % 100 == 0:
    if ano % 400 == 0:
      return True
    else:
      return False
  else:
    return True

# Exemplos de uso:
ano1 = 2024
ano2 = 1900
ano3 = 2000
ano4 = 2023

print(f"O ano {ano1} é bissexto? {eh_bissexto(ano1)}")
print(f"O ano {ano2} é bissexto? {eh_bissexto(ano2)}")
print(f"O ano {ano3} é bissexto? {eh_bissexto(ano3)}")
print(f"O ano {ano4} é bissexto? {eh_bissexto(ano4)}")