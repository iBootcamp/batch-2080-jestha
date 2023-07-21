# Git class

## initialize a repository (repo)

> git init - > This initializes an empty repository which means no files are tracked by git due to which you cannot.

## check status

> git status whether files are tracked or not also checks if the files are ready to be commited.

## Track files

> git add . >adds all files git add filename1 -> adds only one file git add filename1 filename2.

### Guides

- manish shrestha.
  
- create a new file `manish.md`
  
- Then, init a empty repostory by `git init`
  
- Check status of git by `git status`. you'll see `untracked files manish.md`.
  
- Now that we know we have untracked file we should add it to git. so that git will know there's a file called `manish.md`.
  
- Run `git add manish.md` / `git add .`. But for most purposes use `git add .` because it's easy to do so.
  
- Let's try running `git status` again. You'll see `changed to be commited`. Now you have to commit that changes. Run `git commit -m "init".  You can give any messasge instead of`init`.

- Run `git status` . You'll see nothing because git now knows you have commited a file with message init and `manish.md` is being tracked.

- Now go to `github.com` and create a repository. For this   demo I created `example` repository.

- Now you need to set remote url so that git knows where to push your codes. For that run `git remote add origin https://github.com/aomini/example.git.` Here origin is the remote name.
  
- Push a branch to github. `git push -u origin master`. Here `origin` is my remote name from the previous step.

**used codes** steps to be done in a fresh repository.

```text
git init
git add .
git status
git commit -m "msg"
git remote add origin master
git push -u origin master

```

steps to done after a repository is already setup

```text

git status
git add .
git commit -m "msg"
git push <remote_name>

```
