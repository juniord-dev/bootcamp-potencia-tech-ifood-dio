# 🌴 Versionamento de Código com Git e GitHub

## <u>Trabalhando com Branches</u>

#### Comandos:

| Comando                                                | Ação                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| git checkout -b *nova_branch*                          | Cria nova branch locamente                                                                             |
| git branch -v                                          | Ver último commit de cada branch                                                                       |
| git branch                                             | Ver branches existentes                                                                                |
| git branch -d *nome_branch*                            | Deletar branch                                                                                         |
| git merge *nome_branch*                                | Unir branch com a *main*                                                                               |
| git fetch *origin main*                                | Baixa as alterações no repositório remoto sem fazer o merge*                                           |
| git diff *main origin/main*                            | Ver as diferenças entre as branches locais e remota                                                    |
| git merge *origin/main*                                | Merge entre branch local e remota                                                                      |
| git clone *URL* --branch *nome_branch* --single-branch | Clonar branch específica do repositório remoto                                                         |
| git stash                                              | Ao precisar trocar de branch sem perder as modificações, usar o comando para "arquivar" as alterações. |
| git stash list                                         | Exibe as modificações arquivadas                                                                       |
| git stash pop                                          | Ignora as modificações feitas arquivadas, ao voltar para a branch que estava trabalhando               |
| git stash apply                                        | Aplicar as modificações que estavam arquivadas                                                         |

* Git pull = Git Fetch + Git Merge

---

## <u>Comandos básicos</u>

| Comando                                   | Ação                                   |
| ----------------------------------------- | -------------------------------------- |
| git commit --ammend -m "*novo comentário* | Altera o comentário do commit anterior |




