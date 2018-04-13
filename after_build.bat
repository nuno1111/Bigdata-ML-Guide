xcopy .\build\* ..\nuno1111.github.io /y /e
cd ..\nuno1111.github.io
git add .
git commit -m "bulid"
git push
