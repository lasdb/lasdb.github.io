
------- WORKFLOW ----------

1- 	Make changes of files
	Use 'gulp' command for livereload and build

2-	When finished working, get _site repo pushed:
			
			cd c:/users/alumno/desktop/lasdb_jekyll/_site
			git status

	For all files except modified images:
			
			git add filename

			git commit -m "message"
			git push origin master

	Then push the jekyll repo:

			cd ..
			git status
			git add .
			git commit -m "message"
			git push origin master