# SPIN-4 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

- 2026-11-12 — `@fontsource/poppins` sürümü `^5.3.0` olarak eklendi (npm'in güncel sürümü). Paketin Poppins dosyaları `latin-ext` alt kümesini içerdiği için "ğ" gibi Türkçe karakterler de Poppins ile görünür. Ayrı bir alt küme (yalnızca `latin-ext`) içe aktarmak düşünüldü; plan `600.css` ve `700.css` dediği ve tarayıcı yalnızca gereken alt kümeyi indirdiği için reddedildi.
