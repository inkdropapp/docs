set FILENAME pages.txt
touch $FILENAME
set BASEURL https://docs.inkdrop.app
rm $FILENAME
for i in (fd --full-path 'src/app/' -e md)
    set DOCPATH (echo $i | sed -e "s/^src\/app\///" | sed -e "s/page.md//" |  sed -e "s/\.md\$//")
    set PAGE_URL "$BASEURL/$DOCPATH"
    echo -e "\"\"\"md" >>$FILENAME
    cat $i >>$FILENAME
    echo -e "\n\"\"\"" >>$FILENAME
    echo -e "PAGE_URL: $PAGE_URL\n" >>$FILENAME
    echo -e "=========================" >>$FILENAME
end
