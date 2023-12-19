
# cd /config
# echo "-----> cd done"
git add .
echo "-----> git add done"
git status
echo "-----> git status done"
#echo -n "Enter the Description for the Change: "
#read CHANGE_MSG
git commit -m "config files on `date +'%d-%m-%Y %H:%M:%S'`"
echo "-----> git commit done"
git push -u origin main
echo "-----> git push done"
echo "-----> all done"

exit