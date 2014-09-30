for i in {17..29}
do
phantomjs rasterize.js http://insamling.postnummeruppror.nu/map/postorter/2014-09-${i}_23:59.html postort-1409${i}.jpg 400px*750px
done


for i in {17..29}
do
phantomjs rasterize.js http://insamling.postnummeruppror.nu/map/postnummer/5/2014-09-${i}_23:59.html postnr5-1409${i}.jpg 400px*750px
done
