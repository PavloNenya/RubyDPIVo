require 'csv'

# Вхідний рядок з INSERT INTO запитами
input_string = <<-SQL

    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX PULSE (GS)', 'Description for Product', 6529,   3,   1);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX 1 (GS)', 'Description for Product', 6529,   3,   2);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX 270 SE (GS)', 'Description for Product', 6529,   3,   3);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX PULSE (GS)', 'Description for Product', 6529,   3,   4);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX PULSE (GS)', 'Description for Product', 6529,   3,   5);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AIR MAX 2013 (GS)', 'Description for Product', 7549,   3,   6);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (4, 1, 'Кросівки Jumpman MVP', 'Description for Product', 4379,   3,   7);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (4, 1, 'Кросівки Jumpman MVP', 'Description for Product', 7049,   3,   8);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (4, 1, 'Кросівки Jumpman MVP', 'Description for Product', 3279,   3,   9);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 1, 'Кросівки JORDAN SPIZIKE LOW (GS) Team Red', 'Description for Product', 6749,   3,   10);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AMBUSH X NIKE AIR MORE UPTEMPO LOW LILAC AND APPLE GREEN', 'Description for Product', 11399,   4,   11);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE NOCTA AIR FORCE 1 WHITE', 'Description for Product', 9499,   4,   12);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 1, 'Кросівки AIR JORDAN 1 LOW', 'Description for Product', 7049,   1,   13);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 1, 'Кросівки Converse AS-1 PRO OX OLIVE GREEN / BLACK', 'Description for Product', 5199,   1,   14);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike NIKE AIR MAX 1 PRM DIA DE MUERTOS', 'Description for Product', 9479,   4,   15);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike NIKE ZOOM VOMERO 5 PACIFIC MOSS', 'Description for Product', 9129,   1,   16);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE SB VERTEBRAE Team Red', 'Description for Product', 4649,   1,   17);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike SB Force 58 Premium Light Bone / Sand Drift', 'Description for Product', 4379,   1,   18);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike SB Force 58 Team Red / Summit White', 'Description for Product', 4129,   1,   19);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike SB Force 58 Vintage Green', 'Description for Product', 4129,   1,   20);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE WMNS DUNK LOW PHOTON DUST', 'Description for Product', 6529,   2,   21);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE AMBUSH X NIKE AIR MORE UPTEMPO LOW LILAC AND APPLE GREEN', 'Description for Product', 11399,   4,   22);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE NOCTA AIR FORCE 1 WHITE', 'Description for Product', 9499,   4,   23);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки NIKE WMNS AIR FORCE 1 07', 'Description for Product', 6529,   2,   24);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike NIKE AIR MAX 1 PRM DIA DE MUERTOS', 'Description for Product', 9479,   4,   25);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 1, 'Кросівки Nike WMNS Zoom Vomero 5 COOL GREY', 'Description for Product', 8629,   2,   26);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (5, 1, 'Кросівки WMNS JORDAN STADIUM 90', 'Description for Product', 7549,   2,   27);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (5, 1, 'Кросівки WMNS AIR JORDAN 1 MID SE Crinkled Silver Foil', 'Description for Product', 7349,   2,   28);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (5, 1, 'Кросівки WMNS Jumpman MVP', 'Description for Product', 9129,   2,   29);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (5, 1, 'Кросівки WMNS Jumpman MVP', 'Description for Product', 9129,   2,   30);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE M NSW TANK ICON FUTURA', 'Description for Product', 1379,   1,   31);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 2, 'Майка JORDAN M Dri-FIT SPRT SLVLS TOP', 'Description for Product', 1979,   1,   32);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 2, 'Майка JORDAN M Dri-FIT SPRT SLVLS TOP', 'Description for Product', 1979,   1,   33);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE M NSW TREND SLVLS TOP', 'Description for Product', 2479,   1,   34);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE M NSW TANK ICON FUTURA', 'Description for Product', 1379,   1,   35);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 2, 'Майка JORDAN M ESS STMT ESS TANK', 'Description for Product', 1999,   1,   36);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка Nike W NSW ESSNTL RIB CRP TANK', 'Description for Product', 1979,   2,   37);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка Nike W NSW ESSNTL RIB CRP TANK', 'Description for Product', 1979,   2,   38);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE W NSW WVE DYE JRSY SL TOP A3', 'Description for Product', 2099,   2,   39);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE W NSW WVE DYE JRSY SL TOP A3', 'Description for Product', 2099,   2,   40);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE W NSW TANK MSCL FUTURA NEW', 'Description for Product', 1679,   2,   41);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE W NSW TANK MSCL FUTURA NEW', 'Description for Product', 1679,   2,   42);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 2, 'Майка NIKE W NSW TANK MSCL FUTURA NEW', 'Description for Product', 1679,   2,   43);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse WORDMARK KNIT SHORT MOSSY SLOTH', 'Description for Product', 2599,   1,   44);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE M NSW SW AIR SHORT PK', 'Description for Product', 3079,   1,   45);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE M CLUB SHORT WVN', 'Description for Product', 2549,   1,   46);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE M CLUB SHORT WVN', 'Description for Product', 2549,   1,   47);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE M NSW SW AIR SHORT PK', 'Description for Product', 3079,   1,   48);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 3, 'Шорти JORDAN M Dri-FIT SPRT WOVEN SHORT', 'Description for Product', 2229,   1,   49);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE M Dri-FIT TOTALITY KNIT 9 IN UL', 'Description for Product', 1979,   1,   50);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse CHUCK PATCH SHORT BEACH STONE', 'Description for Product', 2149,   4,   51);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse CHUCK PATCH SHORT BEACH STONE', 'Description for Product', 2149,   4,   52);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти Nike SB M KEARNY CARGO SHORT AOP', 'Description for Product', 4329,   1,   53);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE W NSW WOVEN SHORT GLS', 'Description for Product', 2729,   2,   54);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE W NSW ESSNTL MR 5IN WVN SHRT', 'Description for Product', 2729,   2,   55);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 3, 'Шорти NIKE W NSW ESSNTL MR 5IN WVN SHRT', 'Description for Product', 2729,   2,   56);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse RETRO CHUCK BIKE SHORT BLACK', 'Description for Product', 1549,   2,   57);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse CHUCK PATCH SHORT BEACH STONE', 'Description for Product', 2149,   4,   58);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 3, 'Шорти Converse CHUCK PATCH SHORT BEACH STONE', 'Description for Product', 2149,   4,   59);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 3, 'Шорти JORDAN W WVN SHORT', 'Description for Product', 3999,   2,   60);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 3, 'Шорти JORDAN W CHICAGO SHORT', 'Description for Product', 4649,   2,   61);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 3, 'Шорти JORDAN W SPT DMND SHORT 4"', 'Description for Product', 2729,   2,   62);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 3, 'Шорти JORDAN W BRKLN FLC SHORT 2', 'Description for Product', 2729,   2,   63);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (6, 4, 'Набір шкарпеток Stance BASIC 3 PACK CREW White (3 пари)', 'Description for Product', 959,   4,   64);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (6, 4, 'Набір шкарпеток Stance BASIC 3 PACK CREW Multi (3 пари)', 'Description for Product', 959,   4,   65);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 4, 'Шкарпетки JORDAN U ED CUSH POLY ANKLE 3PR 144', 'Description for Product', 1349,   4,   66);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 4, 'Носки Jordan Everyday Essentials', 'Description for Product', 1229,   4,   67);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 4, 'Носки Nike Sportswear Everyday Essential', 'Description for Product', 1229,   4,   68);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 4, 'Шкарпетки NIKE U SNKR SOX CREW 3PR 160 NRG AU', 'Description for Product', 1599,   4,   69);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 4, 'Шкарпетки JORDAN U EVERYDAY ESSENTIALS CREW 1', 'Description for Product', 1229,   4,   70);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 4, 'Шкарпетки JORDAN U EVERYDAY ESSENTIALS CREW 1', 'Description for Product', 1179,   4,   71);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 4, 'Шкарпетки NIKE U NSW EVERYDAY ESSENTIAL AN', 'Description for Product', 729,   4,   72);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 4, 'Шкарпетки JORDAN U ED CUSH POLY ANKLE 3PR 144', 'Description for Product', 789,   4,   73);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 5, 'Штани JORDAN M UNION FLC PANT', 'Description for Product', 5499,   1,   74);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse NOVELTY CHUCK PATCH PANT BLACK', 'Description for Product', 1779,   4,   75);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE M CLUB KNIT OH PANT', 'Description for Product', 2729,   1,   76);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE M CLUB BB CF PANT STACK GX', 'Description for Product', 3649,   1,   77);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE M CLUB BB CF PANT STACK GX', 'Description for Product', 3649,   1,   78);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE M NK CLUB BB CF PANT ARCH GX', 'Description for Product', 3649,   1,   79);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE M NSW CLUB JGGR FT', 'Description for Product', 2499,   1,   80);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 5, 'Штани JORDAN M ESS FLC BASELINE PANT', 'Description for Product', 4149,   1,   81);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse ELEVATED PANT', 'Description for Product', 2969,   1,   82);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 5, 'Штани JORDAN M ESS FLC BASELINE PANT', 'Description for Product', 4149,   1,   83);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse NOVELTY CHUCK PATCH PANT BLACK', 'Description for Product', 1779,   4,   84);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE W NSW PHNX FLC OS AOP SWTPNT', 'Description for Product', 4149,   2,   85);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE W NSW PHNX FLC HR OS PANT', 'Description for Product', 3429,   2,   86);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE W NSW PHNX FLC HR OS PANT', 'Description for Product', 3429,   2,   87);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse RELAXED WIDE LEG', 'Description for Product', 2549,   2,   88);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (1, 5, 'Штани NIKE W NSW TCH FLC MR JGGR', 'Description for Product', 4009,   2,   89);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse STAR CHEV FLEECE PANT FT CLOUDY DAZE', 'Description for Product', 1779,   4,   90);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (2, 5, 'Штани Converse STAR CHEV FLEECE PANT FT CLOUDY DAZE', 'Description for Product', 1269,   4,   91);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 5, 'Брюки Jordan W FLT FLC PANT SSNL', 'Description for Product', 3359,   2,   92);
    INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_photo_id) VALUES (3, 5, 'Брюки Jordan W WVN PANT', 'Description for Product', 3869,   2,   93);
SQL

# Функція для парсингу рядка з запитами
def parse_insert_queries(input_string)
  queries = input_string.scan(/INSERT INTO products \(([^)]+)\) VALUES \(([^)]+)\);/)

  # Отримуємо заголовки з першого запиту
  headers = queries.first[0].split(', ').map(&:strip)

  # Отримуємо значення для всіх запитів
  values = queries.map do |query|
    query[1].split(', ').map do |value|
      value.strip!
      # Видаляємо лапки з рядкових значень
      value.gsub(/^'|'$/, '')
    end
  end

  [headers, values]
end

# Парсимо вхідний рядок
headers, values = parse_insert_queries(input_string)

# Записуємо в CSV файл
CSV.open("products.csv", "wb") do |csv|
  csv << headers
  values.each do |value|
    csv << value
  end
end

puts "CSV файл створено успішно!"
