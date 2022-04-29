# Github Convention

## Git && Github 컨벤션

1. 커밋을 많이 하는 것을 주저하지 마세요. 작업과정에서 커밋이 세분화 되어있을 수록 어떤 것들이 추가, 수정, 삭제 되었는지 알 수 있고, 나중에 코드를 갈아 엎어야 할 때도 유용하게 쓰일 수 있습니다
2. 커밋명은 항상 동사로 시작해야합니다. 단, 다음과 같은 태그들은 예외입니다
    1. Refactor: commit-message : 리팩토링이 있었다면 이 태그를 쓰셔도 됩니다
    2. Fix: commit-message : 버그수정이 있었다면 이 태그를 쓰셔도 됩니다
3. 커밋명은 이 커밋명을 보고 "이사람이 이런 변경사항을 커밋했구나"를 알 수 있도록 지어주세요
4. 협업중 유용하게 쓰일 수 있는 git CLI commands:
```bash
# 코드를 리포에 올릴때
git add -A
git commit -m <commit-message>

git push -u origin <branch-name>

# 로컬 리포 업데이트
git pull

# 브랜치 바꾸기
git checkout -b <branch-name> # 새 브랜치 생성
git checkout <branch-name> # 기존에 있는 브랜치로 전환

# 로깅(지금까지 한 커밋들을 볼 수 있다)
git log
git log --oneline

# 커밋 취소: reset하는 방법
# WARNING!!! 작업하는 브랜치를 다른 팀원들과 공유할 때는 꼭 다른 팀원들에게 
# 내가 forced push를 한다는 사실을 알려야합니다!!
git reset --hard HEAD~n # n은 취소할 커밋 개수
git push -u -f origin <branch-name>

# 커밋 취소: revert하는 방법
# revert는 undo와 같습니다
# 가장 최근의 커밋부터 순서대로 revert 해야합니다
git revert <commit-id> 
```

## PR과 브랜치 관리

1. 어떤 작업을 진행할 때는 브랜치를 새로 파야합니다. 자신의 작업 내용과 연관되는 이름으로 브랜치 이름을 지어 새로 브랜치를 파주세요.
2. 브랜치를 파고 작업을 하면서 커밋을 많이 하는 것을 주저하지 마세요.
3. 작업이 끝났다면 이제 깃헙에 PR을 올릴 차례입니다. 
4. 깃헙 리포지토리 > 상단의 Pull Request 탭 > 우측에 New pull request를 클릭해주세요.
5. base는 main, compare는 자신이 작업한 브랜치로 설정하고 Create pull request를 클릭해주세요.
6. PR에는 다음과 같은 내용들을 포함합니다.
   1. 수정/추가 사항
   2. 작동 여부
   3. Preview(Optional)
   4. 그 외 팀원들이 알아야 할 사항들
7. PR을 올립니다.
8. 올린 PR은 서로 리뷰해줍니다.
