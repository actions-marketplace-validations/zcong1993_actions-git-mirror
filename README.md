# actions git mirror

> An action for git repository mirroring

Run [Mirroring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository) commands in github action.

```bash
git clone --bare https://github.com/exampleuser/old-repository.git
cd old-repository
git push --mirror https://github.com/exampleuser/new-repository.git
```

## Usage

```yaml
- uses: zcong1993/actions-git-mirror@master
  with:
    dest-repo: https://gitee.com/owner/some-dest-repo.git
    dest-token: ${{ secrets.DEST_TOKEN }}
    repo-token: ${{ secrets.GITHUB_TOKEN }}
```

## License

MIT &copy; zcong1993
