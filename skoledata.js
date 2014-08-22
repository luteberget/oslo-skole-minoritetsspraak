var skoledata = [
{name: "Abilds� skole", andel: 26.1, loc: { lat: 59.8813684, lng: 10.8253994 }},
{name: "Ammerud skole", andel: 70.8, loc: { lat: 59.9651139, lng: 10.8736696 }},
{name: "Apall�kka skole", andel: 63.4, loc: { lat: 59.9594765, lng: 10.8642419 }},
{name: "Bak�s skole", andel: 46.2, loc: { lat: 59.9376243, lng: 10.9107219 }},
{name: "Bekkelaget skole", andel: 2.6, loc: { lat: 59.8823187, lng: 10.7849945 }},
{name: "Bestum skole", andel: 20.8, loc: { lat: 59.924092, lng: 10.6543293 }},
{name: "Bj�lsen skole", andel: 50.1, loc: { lat: 59.9395477, lng: 10.7569341 }},
{name: "Bj�rndal skole", andel: 72.6, loc: { lat: 59.8258566, lng: 10.836772 }},
{name: "Bj�rnholt skole", andel: 64.8, loc: { lat: 59.8344206, lng: 10.8379555 }},
{name: "Bj�rnsletta skole", andel: 19, loc: { lat: 59.9287134, lng: 10.6423349 }},
{name: "Bj�r�sen skole", andel: 69.1, loc: { lat: 59.9707557, lng: 10.9000314 }},
{name: "Bogstad skole", andel: 6.9, loc: { lat: 59.9612164, lng: 10.6363405 }},
{name: "Boltel�kka skole", andel: 25.6, loc: { lat: 59.9274044, lng: 10.7348055 }},
{name: "Brannfjell skole", andel: 15.2, loc: { lat: 59.8878405, lng: 10.7822185 }},
{name: "Bryn skole", andel: 62.5, loc: { lat: 59.9144542, lng: 10.8233515 }},
{name: "Bygd�y skole", andel: 14.9, loc: { lat: 59.9050051, lng: 10.6763686 }},
{name: "B�ler skole", andel: 17.5, loc: { lat: 59.8837258, lng: 10.8490388 }},
{name: "Disen skole", andel: 5.9, loc: { lat: 59.9484223, lng: 10.7944977 }},
{name: "Ekeberg skole", andel: 16, loc: { lat: 59.8949755, lng: 10.7840506 }},
{name: "Ellingsrud skole", andel: 61.3, loc: { lat: 59.9351294, lng: 10.9175331 }},
{name: "Ellingsrud�sen skole", andel: 62.8, loc: { lat: 59.9352815, lng: 10.92099 }},
{name: "Engebr�ten skole", andel: 13.4, loc: { lat: 59.9597504, lng: 10.775631 }},
{name: "Frydenberg skole", andel: 62.6, loc: { lat: 59.9280417, lng: 10.7898088 }},
{name: "Furuset skole", andel: 84.5, loc: { lat: 59.9396217, lng: 10.8914102 }},
{name: "Fyrstikkalleen skole", andel: 53.7, loc: { lat: 59.915257, lng: 10.794332 }},
{name: "Gamlebyen skole", andel: 62.1, loc: { lat: 59.9068125, lng: 10.7704457 }},
{name: "Godlia skole", andel: 31.1, loc: { lat: 59.907019, lng: 10.8469506 }},
{name: "Gran skole", andel: 96.6, loc: { lat: 59.9434559, lng: 10.8973148 }},
{name: "Grefsen skole", andel: 16.6, loc: { lat: 59.9549349, lng: 10.773233 }},
{name: "Grorud skole", andel: 65.2, loc: { lat: 59.9583016, lng: 10.8828015 }},
{name: "Groruddalen skole", andel: 63.4, loc: { lat: 59.9544342, lng: 10.8886775 }},
{name: "Gr�nerl�kka skole", andel: 40.2, loc: { lat: 59.926392, lng: 10.761662 }},
{name: "Hallagerbakken skole", andel: 50.4, loc: { lat: 59.8412678, lng: 10.7915871 }},
{name: "Hasle skole", andel: 31.2, loc: { lat: 59.9222604, lng: 10.7892529 }},
{name: "Haugen skole", andel: 83.7, loc: { lat: 59.9472873, lng: 10.9054436 }},
{name: "Haugenstua skole", andel: 69.6, loc: { lat: 59.954165, lng: 10.9207993 }},
{name: "Haugerud skole", andel: 83.5, loc: { lat: 59.922516, lng: 10.85941 }},
{name: "Hauketo skole", andel: 53.9, loc: { lat: 59.8382161, lng: 10.8137147 }},
{name: "Hauk�sen skole", andel: 58.2, loc: { lat: 59.922388, lng: 10.863519 }},
{name: "Holmlia skole", andel: 73.7, loc: { lat: 59.833449, lng: 10.790575 }},
{name: "Hovseter skole", andel: 19.6, loc: { lat: 59.9497355, lng: 10.654615 }},
{name: "Huseby skole", andel: 17.1, loc: { lat: 59.9457717, lng: 10.6523279 }},
{name: "H�yenhall skole", andel: 34.3, loc: { lat: 59.9000855, lng: 10.8123795 }},
{name: "Ila skole", andel: 40.9, loc: { lat: 59.9273599, lng: 10.7459357 }},
{name: "Jeriko skole", andel: 61.3, loc: { lat: 59.9337517, lng: 10.8859744 }},
{name: "Jordal skole", andel: 64.5, loc: { lat: 59.9082262, lng: 10.78312 }},
{name: "Kampen skole", andel: 48.9, loc: { lat: 58.9721823, lng: 5.7165386 }},
{name: "Karlsrud skole", andel: 26.8, loc: { lat: 59.8777514, lng: 10.8094878 }},
{name: "Kastellet skole", andel: 12, loc: { lat: 59.8734781, lng: 10.7922318 }},
{name: "Kjels�s skole", andel: 10.4, loc: { lat: 59.9655597, lng: 10.7852851 }},
{name: "Klemetsrud skole", andel: 49.2, loc: { lat: 59.8352193, lng: 10.8442266 }},
{name: "Korsvoll skole", andel: 14.9, loc: { lat: 59.9641373, lng: 10.7512739 }},
{name: "Kringsj� skole", andel: 16.7, loc: { lat: 59.9626344, lng: 10.7303296 }},
{name: "Lakkegata skole", andel: 58.5, loc: { lat: 59.9206356, lng: 10.7683893 }},
{name: "Lambertseter skole", andel: 28.9, loc: { lat: 59.870916, lng: 10.8153564 }},
{name: "Lilleaker skole", andel: 14.3, loc: { lat: 59.9231515, lng: 10.6391752 }},
{name: "Lilleborg skole", andel: 43.1, loc: { lat: 59.9331856, lng: 10.7648789 }},
{name: "Lindeberg skole", andel: 80.1, loc: { lat: 59.9312732, lng: 10.8794565 }},
{name: "Linderud skole", andel: 81.4, loc: { lat: 59.9401139, lng: 10.8338104 }},
{name: "Ljan skole", andel: 12.7, loc: { lat: 59.846959, lng: 10.7863106 }},
{name: "Lofsrud skole", andel: 70.1, loc: { lat: 59.8459716, lng: 10.8277253 }},
{name: "Lusetjern skole", andel: 68.5, loc: { lat: 59.8324024, lng: 10.7890637 }},
{name: "Lutvann skole", andel: 71.6, loc: { lat: 59.9257328, lng: 10.8696113 }},
{name: "Lysejordet skole", andel: 15.1, loc: { lat: 59.9373395, lng: 10.6400577 }},
{name: "L�nnebakken skole", andel: 41.4, loc: { lat: 59.9335304, lng: 10.7726383 }},
{name: "L�ren skole", andel: 36.8, loc: { lat: 59.9313764, lng: 10.8024458 }},
{name: "Majorstuen skole", andel: 41.4, loc: { lat: 59.929325, lng: 10.713652 }},
{name: "Manglerud skole", andel: 25.7, loc: { lat: 59.8942022, lng: 10.8212007 }},
{name: "Marienlyst skole", andel: 28.6, loc: { lat: 59.9352908, lng: 10.7226281 }},
{name: "Midtstuen skole", andel: 7, loc: { lat: 59.9606694, lng: 10.6877537 }},
{name: "Mortensrud skole", andel: 94.3, loc: { lat: 59.8473376, lng: 10.8259741 }},
{name: "Munkerud skole", andel: 3.6, loc: { lat: 59.8587964, lng: 10.8109818 }},
{name: "M�llergata skole", andel: 80.4, loc: { lat: 59.9181888, lng: 10.7504066 }},
{name: "Nedre Bekkelaget skole", andel: 27.8, loc: { lat: 59.881009, lng: 10.771207 }},
{name: "Nordberg skole", andel: 13.2, loc: { lat: 59.9628019, lng: 10.7313782 }},
{name: "Nordpolen skole", andel: 53, loc: { lat: 59.9399284, lng: 10.7721806 }},
{name: "Nordseter skole", andel: 14.4, loc: { lat: 59.8669799, lng: 10.7951282 }},
{name: "Nordstrand skole", andel: 16.5, loc: { lat: 59.8607762, lng: 10.7940175 }},
{name: "Nordtvet skole", andel: 61.9, loc: { lat: 59.9516754, lng: 10.8726181 }},
{name: "Nordvoll skole", andel: 81.3, loc: { lat: 59.9240365, lng: 10.8645761 }},
{name: "N�klevann skole", andel: 42.6, loc: { lat: 59.8766175, lng: 10.8485851 }},
{name: "Oppsal skole", andel: 14.8, loc: { lat: 59.8978111, lng: 10.8444365 }},
{name: "Prinsdal skole", andel: 55.1, loc: { lat: 59.8368435, lng: 10.81353 }},
{name: "Ris ungdomsskole", andel: 9.6, loc: { lat: 59.9460149, lng: 10.7071491 }},
{name: "Rommen skole", andel: 95.3, loc: { lat: 59.9668008, lng: 10.9133791 }},
{name: "Rosenholm skole", andel: 72.1, loc: { lat: 59.8296465, lng: 10.7850006 }},
{name: "Rusel�kka skole", andel: 45.1, loc: { lat: 59.9133017, lng: 10.7256149 }},
{name: "Rustad skole", andel: 44.4, loc: { lat: 59.871443, lng: 10.8384838 }},
{name: "R�dtvet skole", andel: 67.6, loc: { lat: 59.9542267, lng: 10.8579409 }},
{name: "Sagene skole", andel: 41.8, loc: { lat: 59.9307939, lng: 10.7592902 }},
{name: "Sinsen skole", andel: 59.8, loc: { lat: 59.9352982, lng: 10.7836377 }},
{name: "Skj�nnhaug skole", andel: 77.2, loc: { lat: 59.9286447, lng: 10.8773468 }},
{name: "Skullerud skole", andel: 45, loc: { lat: 59.8704031, lng: 10.8479663 }},
{name: "Sk�yen skole", andel: 14.7, loc: { lat: 59.9290585, lng: 10.6906114 }},
{name: "Sk�yen�sen skole", andel: 21.3, loc: { lat: 59.8954769, lng: 10.8359384 }},
{name: "Slemdal skole", andel: 8.3, loc: { lat: 59.9514757, lng: 10.6924234 }},
{name: "Smestad skole", andel: 13.1, loc: { lat: 59.9325431, lng: 10.6827946 }},
{name: "Sollerudstranda skole", andel: 33.8, loc: { lat: 59.9135732, lng: 10.6474067 }},
{name: "Stasjonsfjellet skole", andel: 27.5, loc: { lat: 59.9491796, lng: 10.9282058 }},
{name: "Stenbr�ten skole", andel: 61.6, loc: { lat: 59.8531987, lng: 10.8242692 }},
{name: "Stig skole", andel: 88.4, loc: { lat: 59.9509728, lng: 10.9201322 }},
{name: "Stovner skole", andel: 63.7, loc: { lat: 59.9561631, lng: 10.9269713 }},
{name: "Svarttjern skole", andel: 62.1, loc: { lat: 59.9680935, lng: 10.9002892 }},
{name: "Svendstuen skole", andel: 11.6, loc: { lat: 59.9588253, lng: 10.6890455 }},
{name: "Tiurleiken skole", andel: 84.9, loc: { lat: 59.9624072, lng: 10.8938027 }},
{name: "Tokerud skole", andel: 76, loc: { lat: 59.966133, lng: 10.9307307 }},
{name: "Tonsenhagen skole", andel: 33.4, loc: { lat: 59.9461903, lng: 10.8294979 }},
{name: "Topp�sen skole", andel: 56.1, loc: { lat: 59.8332904, lng: 10.7999548 }},
{name: "Trasop skole", andel: 13.7, loc: { lat: 59.9041404, lng: 10.8511774 }},
{name: "Trosterud skole", andel: 75.6, loc: { lat: 59.9230292, lng: 10.858272 }},
{name: "Tveita skole", andel: 64.7, loc: { lat: 59.9136162, lng: 10.8386229 }},
{name: "T�sen skole", andel: 7.8, loc: { lat: 59.953789, lng: 10.7513099 }},
{name: "T�yen skole", andel: 98.4, loc: { lat: 59.9150368, lng: 10.7733143 }},
{name: "Ullev�l skole", andel: 10.2, loc: { lat: 59.9421054, lng: 10.7334267 }},
{name: "Ullev�lsveien skole", andel: 48.1, loc: { lat: 59.9291286, lng: 10.7361245 }},
{name: "Uranienborg skole", andel: 37.4, loc: { lat: 59.9201839, lng: 10.7192922 }},
{name: "Vahl skole", andel: 92.6, loc: { lat: 59.9167932, lng: 10.7668099 }},
{name: "Veitvet skole", andel: 80.5, loc: { lat: 59.9418603, lng: 10.8498268 }},
{name: "Vestli skole", andel: 80.6, loc: { lat: 60.008326, lng: 10.9160457 }},
{name: "Vestre Aker skole", andel: 36.7, loc: { lat: 59.9411409, lng: 10.7344363 }},
{name: "Vinderen skole", andel: 7.7, loc: { lat: 59.9415391, lng: 10.7064485 }},
{name: "Voksen skole", andel: 24.9, loc: { lat: 59.9548434, lng: 10.6528786 }},
{name: "V�lerenga skole", andel: 40.5, loc: { lat: 59.907375, lng: 10.789362 }},
{name: "�raker skole", andel: 18.9, loc: { lat: 59.9254743, lng: 10.6388408 }},
{name: "�stensj� skole", andel: 17.7, loc: { lat: 59.8998321, lng: 10.8309358 }},
{name: "�rvoll skole", andel: 45.3, loc: { lat: 59.944257, lng: 10.8141849 }},

];

