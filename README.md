# actions git mirror

> An action for git repository mirroring

## Usage

```yaml
- uses: zcong1993/actions-git-mirror
  with:
    dest-repo: https://gitee.com/owner/some-dest-repo.git
    dest-token: ${{ secrets.DEST_TOKEN }}
    repo-token: ${{ secrets.GITHUB_TOKEN }}
```

## License

MIT &copy; zcong1993
