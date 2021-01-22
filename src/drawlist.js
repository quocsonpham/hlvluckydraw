const DRAWLIST = [
    '1 Vương Lệ Khanh',
    '2 Lê Thị Mỹ Hạnh (Nancy)',
    '3 Nguyễn Đình Giang',
    '4 Nguyễn Thanh Việt',
    '5 Nguyễn Thị Ngọc Thanh',
    '6 Nguyễn Mộng Tường Vi',
    '7 Nguyễn Thành Nhân',
    '8 Lục Thanh Minh',
    '9 Hoàng Thị Thúy Vi',
    '10 Võ Thanh Tâm',
    '11 Kambayashi Sadanao',
    '12 Hồ Công Lý',
    '13 Đỗ Nguyễn Hồng Nhung',
    '14 Nguyễn Thị Thanh Thúy',
    '15 Lương Kiện Cần',
    '16 Dương Bích Liên',
    '17 Hoàng Thị Lệ Mi',
    '18 Nguyễn Thanh Phương Nhật',
    '19 Nguyễn Thị Kim Liên',
    '20 Nguyễn Thị Hồng Thủy',
    '21 Nguyễn Thị Thảo',
    '22 Phạm Thị Thanh Thúy',
    '23 Mẫn Thị Mừng',
    '24 Nguyễn Kim Thắng',
    '25 Hoàng Thị Ngọc Thanh',
    '26 Lê Trần Minh Thuận',
    '27 Trần Thị Tịnh',
    '28 Nguyễn Thị Hảo',
    '29 Nguyễn Trung Hiếu',
    '30 Nguyễn Thủy Nghy Vân',
    '31 Nguyễn Ngọc Minh',
    '32 Lê Như Minh Hải',
    '33 Đặng Thúy Hằng',
    '34 Đặng Thị Thu Diệu',
    '35 Mai Minh Thiện',
    '36 Nguyễn Ngọc Bảo Trâm',
    '37 Lê Công Thành',
    '38 Huỳnh Thị Lệ Thi',
    '39 Nguyễn Minh Tâm',
    '40 Đặng Văn Chung',
    '41 Huỳnh Khắc Huy',
    '42 Vũ Thị Là',
    '43 Cao Thu Hà',
    '44 Trần Thị Thùy Trang',
    '45 Lâm Trung Phát',
    '46 Cao Thị Ngọc Yến',
    '47 Võ Thị Điệp',
    '48 Lê Thị Bích Thủy',
    '49 Lâm Thị Thủy',
    '50 Trần Bảo Minh',
    '51 Phạm Dương Trúc Đào',
    '52 Trịnh Huỳnh Mạnh Tông',
    '53 Đặng Thị Diễm',
    '54 Trần Thanh Hoàng',
    '55 Nguyễn Thị Thanh Nhàn',
    '56 Phạm Thị Thanh',
    '57 Huỳnh Ngọc Hân',
    '58 Nguyễn Thị Thảo',
    '59 Phạm Thị Thùy Trang',
    '60 Vũ Thị Kim Nhung',
    '61 Phan Văn Vũ Nam',
    '62 Trần Thị Việt Trinh',
    '63 Vũ Ngọc Ánh',
    '64 Nguyễn Xuân Lẳm',
    '65 Trần Tiến Đạt',
    '66 Taura Remi',
    '67 Đinh Thị Xuân Hồng',
    '68 Đỗ Thị Nhài',
    '69 Nguyễn Hồng Vỹ',
    '70 Trần Thị Tiến Hằng',
    '71 Đào Văn Tặng',
    '72 Nguyễn Thanh Phương Trâm',
    '73 Fuji Sotaro',
    '74 Lê Thị Mỹ Linh',
    '75 Hoàng Thị Phương',
    '76 Trương Thị Mỹ Chinh',
    '77 Nguyễn Quốc Duy',
    '78 Takeyoshi Ohkawa',
    '79 Trần Phú Vinh',
    '80 Dương Văn Tư',
    '81 Trần Văn Thuận',
    '82 Bùi Duy Linh',
    '83 Hồ Khắc Nguyên',
    '84 Nguyễn Bảo Trung',
    '85 Lê Hồng Quang',
    '86 Dương Văn Tường',
    '87 Mai Quang Chính',
    '88 Ngô Nhật Khánh Quỳnh',
    '89 Trương Bốn',
    '90 Lê Thị Nhân Ái',
    '91 Võ Thị Diệu',
    '92 Nguyễn Định Cương',
    '93 Nguyễn Đức Nam',
    '94 Phạm Hữu Điềm',
    '95 Lê Trường Sang',
    '96 Nguyễn Thị Ngọc Thanh',
    '97 Huỳnh Vũ Luân',
    '98 Lê Thị Mỹ Lệ',
    '99 Đỗ Trường An',
    '100 Lê Ngọc Tuấn',
    '101 Huỳnh Thị Hiền',
    '102 Lưu Nguyên Vi',
    '103 Đinh Thị Minh Thu',
    '104 Bùi Thị Thanh Thúy',
    '105 Lê Thị Khánh Châu',
    '106 Lê Thị Song Bình',
    '107 Hồ Thị Hoàng Nhi',
    '108 Trần Thị Lệ Hằng',
    '109 Nguyễn Thanh Hồng',
    '110 Phạm Hoàng Thy',
    '111 Phạm Hoàng Vũ',
    '112 Bùi Thị Ngọc Hiền',
    '113 Nguyễn Thị Minh Thư',
    '114 Đặng Võ Thùy Tâm',
    '115 Trần Minh',
    '116 Bùi Đình Quang Bình',
    '117 Huỳnh Thị Dương Thiện',
    '118 Trần Hữu Thế',
    '119 Huỳnh Thị Lệ',
    '120 Nguyễn Thái Minh',
    '121 Thái Trần Tố Chân',
    '122 Nguyễn Thị Tuyết Mốt',
    '123 Trần Thị Thanh Huyền',
    '124 Hồ Mai Anh',
    '125 Nguyễn Mạnh Quỳnh Khuyên',
    '126 Trần Thị Thanh Trang',
    '127 Trần Thị Hương',
    '128 Lê Anh Tuyên',
    '129 Nguyễn Minh Phi Bằng',
    '130 Phạm Thanh Hải Định',
    '131 Trần Vũ Trường Giang',
    '132 Nguyễn Tuấn Anh',
    '133 Phan Thị Minh Huyền',
    '134 Phạm Nguyễn Thiên Du',
    '135 Trịnh Minh Thủy',
    '136 Ngô Kinh Luân',
    '137 Đặng Vũ Bôn',
    '138 Mai Vương Diệu',
    '139 Nguyễn Văn Nôi',
    '140 Huỳnh Hữu Danh',
    '141 Phan Thành Nhân',
    '142 Trần Tuấn Em',
    '143 Huỳnh Thanh Nam',
    '144 Nguyễn Duy Sơn',
    '145 Nguyễn Thị Lý',
    '146 Nguyễn Thị Hoa Mỹ',
    '147 Nguyễn Minh Tuấn',
    '148 Nguyễn Hải Biển',
    '149 Vũ Thị Thanh Bình',
    '150 Trần Đình Khoái',
    '151 Hồ Minh Duy',
    '152 Võ Quang Thạnh',
    '153 Lương Thị Nguyên Ngọc',
    '154 Phạm Minh Ngân',
    '155 Lê Thị Quỳnh Nga',
    '156 Phạm Xuân Lộc',
    '157 Hoàng Xuân Thịnh',
    '158 Nguyễn Thị Thúy Diễm',
    '159 Trần Ánh Dương',
    '160 Trần Thị My',
    '161 Nguyễn Hữu Đạt',
    '162  Nguyễn Thị Lan Anh',
    '163 Nguyễn Đình Quốc Sang',
    '164 Quách Khả Nhi',
    '165 Hồ Chí Nguyện',
    '166 Trần Đăng Khôi',
    '167 Trần Hoài Thương',
    '168 Nguyễn Thụy Phương Thy',
    '169 Lê Tấn Nhân',
    '170 Trần Thị Hiền',
    '171 Phan Thị Mỷ Huyền',
    '172 Trần Thị Ngọc Giàu',
    '173 Lê Thị Trà',
    '174 Nguyễn Văn Hòa',
    '175 Phùng Bá Nhân',
    '176 Mai Thị Kiều Diễm',
    '177 Phan Thị Thu Sương',
    '178 Phan Duy Luân',
    '179 Nguyễn Hạnh Uyên Khanh',
    '180 Nguyễn Ngọc Hồng Phương',
    '181 Nguyễn Thị Kim Thương',
    '182 Mai Thanh Hiếu',
    '183 Phạm Văn Mạnh',
    '184 Trần Văn Hương',
    '185 Phạm Văn Đồng',
    '186 Võ Thành Công',
    '187 Tôn Nữ Khánh Vân',
    '188 Nguyễn Thị Loan Phương',
    '189 Nguyễn Thị Bích',
    '190 Nguyễn Văn Trung'
]

export default DRAWLIST;