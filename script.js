const DEFAULT_QUESTIONS = [
  {
    "id": 1,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc xử trí do phỏng hóa chất tại Phòng thí nghiệm:",
    "options": {
      "A": "Rửa trôi và trung hòa bằng hóa chất khác.",
      "B": "Rửa trôi hóa chất.",
      "C": "Trung hòa bằng hóa chất khác.",
      "D": "Băng chặt hoặc dùng Vaselin, thuốc mỡ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 2,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc xử trí do phỏng do acid tại Phòng thí nghiệm:",
    "options": {
      "A": "Đắp vải mùng tẩm Na Bicarbonate 8% sau đó rửa sạch với nước.",
      "B": "Đắp vải mùng tẩm acid picric 3% sau đó rửa sạch với nước.",
      "C": "Rửa trôi hóa chất sau đó đắp vải mùng tẩm Na Bicarbonate 8%.",
      "D": "Rửa trôi hóa chất sau đó đắp vải mùng tẩm acid picric 3%."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 3,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc xử trí do phỏng do kiềm tại Phòng thí nghiệm:",
    "options": {
      "A": "Đắp vải mùng tẩm Na Bicarbonate 8% sau đó rửa sạch với nước.",
      "B": "Đắp vải mùng tẩm acid picric 3% sau đó rửa sạch với nước.",
      "C": "Rửa trôi hóa chất sau đó đắp vải mùng tẩm Na Bicarbonate 8%.",
      "D": "Rửa trôi hóa chất sau đó đắp vải mùng tẩm acid picric 3%."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 4,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Khi bị Acid (Brom) rơi vào mắt, nguyên tắc xử trí là:",
    "options": {
      "A": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch bicarbonate natri 5%.",
      "B": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch acid boric 5%.",
      "C": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch bicarbonate natri 1%.",
      "D": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch acid boric 1%."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 5,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Khi bị chất kiềm rơi vào mắt, nguyên tắc xử trí là:",
    "options": {
      "A": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch bicarbonate natri 5%.",
      "B": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch acid boric 5%.",
      "C": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch bicarbonate natri 1%.",
      "D": "Tắm mắt tức khắc với nước, sau đó tắm mắt trong dung dịch acid boric 1%."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 6,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Khi bị hóa chất không phải acid hay kiềm rơi vào miệng, nguyên tắc xử trí là:",
    "options": {
      "A": "Súc miệng nhiều lần bằng dung dịch natri bicarbonate 1%.",
      "B": "Súc miệng nhiều lần bằng dung dịch acid boric 1%.",
      "C": "Súc miệng nhiều lần bằng dung dịch NaCl 0,9%.",
      "D": "Súc miệng nhiều lần bằng nước sạch."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 7,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#NguyenTac"
    ],
    "question": "Nguyên tắc xử trí khi bị nhiễm hơi độc trong Phòng thí nghiệm, NGOẠI TRỪ:",
    "options": {
      "A": "Đem nạn nhân ra nơi thoáng khí, nới lỏng quần áo.",
      "B": "Cho nạn nhân uống trà đường hay nước đường.",
      "C": "Cho nạn nhan uống 1 ly cà phê đen.",
      "D": "Hô hấp nhân tạo (nếu cần) trong lúc đi đến bệnh viện."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 8,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong công thức C = (OD / OD0) × Co, OD là:",
    "options": {
      "A": "Nồng độ của mẫu thử.",
      "B": "Nồng độ của mẫu chuẩn.",
      "C": "Mật độ quang của ống thử.",
      "D": "Mật độ quang của ống chuẩn."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 9,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong công thức C = (OD / OD0) × Co, ODo là:",
    "options": {
      "A": "Nồng độ của mẫu thử.",
      "B": "Nồng độ của mẫu chuẩn.",
      "C": "Mật độ quang của ống thử.",
      "D": "Mật độ quang của ống chuẩn."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 10,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong công thức C = (OD / OD0) × Co, C là:",
    "options": {
      "A": "Nồng độ của mẫu thử.",
      "B": "Nồng độ của mẫu chuẩn.",
      "C": "Mật độ quang của ống thử.",
      "D": "Mật độ quang của ống chuẩn."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 11,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong công thức C = (OD / OD0) × Co, Co là:",
    "options": {
      "A": "Nồng độ của mẫu thử.",
      "B": "Nồng độ của mẫu chuẩn.",
      "C": "Mật độ quang của ống thử.",
      "D": "Mật độ quang của ống chuẩn."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 12,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cốc có mỏ còn được gọi là:",
    "options": {
      "A": "Ballon.",
      "B": "Becher.",
      "C": "Eprouvette.",
      "D": "Erlenmeyer."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 13,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Bình cầu còn được gọi là:",
    "options": {
      "A": "Ballon.",
      "B": "Becher.",
      "C": "Eprouvette.",
      "D": "Erlenmeyer."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 14,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Ống đong còn đượng gọi là:",
    "options": {
      "A": "Ballon.",
      "B": "Becher.",
      "C": "Eprouvette.",
      "D": "Erlenmeyer."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 15,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Ống hút còn được gọi là:",
    "options": {
      "A": "Ballon.",
      "B": "Becher.",
      "C": "Piptte.",
      "D": "Erlenmeyer."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 16,
    "cluster": "1-100",
    "topic": "An toàn PTN & Dụng cụ",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Bình nón còn được gọi là:",
    "options": {
      "A": "Ballon.",
      "B": "Becher.",
      "C": "Eprouvette.",
      "D": "Erlenmeyer."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 17,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Thời gian bảo quản cho phép với các mẫu huyết thanh và huyết tương ở nhiệt độ phòng thí nghiệm là:",
    "options": {
      "A": "4 giờ.",
      "B": "8 giờ.",
      "C": "12 giờ.",
      "D": "1-2 ngày."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 18,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Thời gian bảo quản cho phép với các mẫu huyết thanh và huyết tương ở nhiệt độ 2 – 80C là:",
    "options": {
      "A": "4 giờ.",
      "B": "8 giờ.",
      "C": "12 giờ.",
      "D": "1-2 ngày."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 19,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Mẫu huyết thanh và huyết tương bảo quản được 1 – 2 ngày ở nhiệt độ:",
    "options": {
      "A": "2 – 80C.",
      "B": "8 – 120C.",
      "C": "12 – 240C.",
      "D": "24 – 370C."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 20,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Khi lấy huyết thanh định lượng Kali, Natri, khi ly tâm cục máu đông hình thành và tách cục huyết khỏi dính vào thành ống, thời gian không quá:",
    "options": {
      "A": "15 phút.",
      "B": "30 phút.",
      "C": "45 phút.",
      "D": "60 phút."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 21,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi nghi ngờ viêm tiết niệu nên lấy nước tiểu khi:",
    "options": {
      "A": "Lúc ngủ dậy.",
      "B": "Sau bữa ăn 2 giờ.",
      "C": "Khoảng 14 – 16 giờ.",
      "D": "Bất kỳ lúc nào."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 22,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi nghi ngờ glucose niệu nên lấy nước tiểu khi:",
    "options": {
      "A": "Lúc ngủ dậy.",
      "B": "Sau bữa ăn 2 giờ.",
      "C": "Khoảng 14 – 16 giờ.",
      "D": "Bất kỳ lúc nào."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 23,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi nghi ngờ urobilinogen nên lấy nước tiểu khi:",
    "options": {
      "A": "Lúc ngủ dậy.",
      "B": "Sau bữa ăn 2 giờ. o",
      "C": "Khoảng 14 – 16 giờ.",
      "D": "Bất kỳ lúc nào."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 24,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Nhiệt độ thích hợp để bảo quản mẫu nước tiểu trong vòng 3 ngày là:",
    "options": {
      "A": "Dưới 00C.",
      "B": "2 – 80C.",
      "C": "12 – 240C.",
      "D": "24 – 370C."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 25,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Nhiệt độ thích hợp để bảo quản mẫu nước tiểu trong lâu hơn 3 ngày là:",
    "options": {
      "A": "Dưới 00C.",
      "B": "2 – 80C.",
      "C": "12 – 240C.",
      "D": "24 – 370C."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 26,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi lấy dịch vị để chẩn đoán các bệnh dạ dày, bệnh nhân cần nhịn đói:",
    "options": {
      "A": "6 giờ.",
      "B": "12 giờ.",
      "C": "24 giờ.",
      "D": "32 giờ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 27,
    "cluster": "1-100",
    "topic": "Bảo quản & Lấy bệnh phẩm",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi lấy dịch vị để chẩn đoán các bệnh dạ dày, bệnh nhân cần ngừng dùng các thuốc ảnh hưởng đến sự bài tiết dịch vị ít nhất:",
    "options": {
      "A": "6 giờ.",
      "B": "12 giờ.",
      "C": "24 giờ.",
      "D": "32 giờ."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 28,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng Fehling dương tính khi:",
    "options": {
      "A": "Cho phức hợp màu đỏ gạch.",
      "B": "Cho kết tủa đỏ gạch.",
      "C": "Cho phức hợp màu đỏ.",
      "D": "Cho kết tủa màu đỏ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 29,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng Fehling dương tính khi:",
    "options": {
      "A": "MS có tính khử.",
      "B": "PS có tính khử.",
      "C": "MS có tính oxy hóa.",
      "D": "PS có tính oxy hóa."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 30,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng Fehling được thực hiện trong môi trường:",
    "options": {
      "A": "Acid mạnh.",
      "B": "Base mạnh.",
      "C": "Có enzyme xúc tác.",
      "D": "NaCl 0,9%."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 31,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi thực hiện phản ứng Fehling cần:",
    "options": {
      "A": "Đun sôi cách thủy 5 phút.",
      "B": "Đun sôi cách thủy 3 phút.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 3 phút."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 32,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc của phản ứng Molish là:",
    "options": {
      "A": "Các loại protid đều cho kết tủa đỏ gạch với Naphtol trong H2SO4 đậm đặc.",
      "B": "Các loại glucid đều cho kết tủa đỏ gạch với Naphtol trong H2SO4 đậm đặc.",
      "C": "Các loại protid đều cho phức chất màu tím với Naphtol trong H2SO4 đậm đặc.",
      "D": "Các loại glucid đều cho phức chất màu tím với Naphtol trong H2SO4 đậm đặc."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 33,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng màu của PS, Iod kết hợp với tinh bột cho màu:",
    "options": {
      "A": "Xanh dương.",
      "B": "Xanh lá cây.",
      "C": "Đỏ nâu.",
      "D": "Đỏ gạch."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 34,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng màu của PS, Iod kết hợp với glycogen cho màu:",
    "options": {
      "A": "Xanh dương.",
      "B": "Xanh lá cây.",
      "C": "Đỏ nâu.",
      "D": "Đỏ gạch."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 35,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng màu của PS, Iod kết hợp với tinh bột cho hiện tượng:",
    "options": {
      "A": "Xanh dương sau một thời gian màu đậm hơn.",
      "B": "Xanh dương sau một thời gian thì mất màu.",
      "C": "Đỏ nâu sau một thời gian thì màu đậm hơn.",
      "D": "Đỏ nâu sau một thời gian thì mất màu."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 36,
    "cluster": "1-100",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng màu của PS, Iod kết hợp với glycogen cho hiện tượng:",
    "options": {
      "A": "Xanh dương sau một thời gian màu đậm hơn.",
      "B": "Xanh dương sau một thời gian thì mất màu.",
      "C": "Đỏ nâu sau một thời gian thì màu đậm hơn.",
      "D": "Đỏ nâu sau một thời gian thì mất màu."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 37,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Somoyi Nelson dùng để:",
    "options": {
      "A": "Định lượng glucose trong huyết tương.",
      "B": "Định lượng cholesterol toàn phần trong huyết tương.",
      "C": "Định lượng HDL – cholesterol trong huyết tương.",
      "D": "Định lượng LDL – cholesterol trong huyết tương."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 38,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp Somoyi Nelson, phương pháp được sử dụng là:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 39,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Chất dùng để đo quang trong phương pháp Somoyi Nelson là:",
    "options": {
      "A": "Arsenomolybdat – Màu đỏ.",
      "B": "Arsenomolybdat – Màu xanh.",
      "C": "Oxid Molybdine – Màu đỏ.",
      "D": "Oxid Molybdine – Màu xanh."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 40,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp Somoyi Nelson, huyết thanh được pha loãng:",
    "options": {
      "A": "1/5.",
      "B": "1/10.",
      "C": "1/20.",
      "D": "1/50."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 41,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp Somoyi Nelson, trước khi cho dung dịch Asenomolybdat vào, ta cần:",
    "options": {
      "A": "Đun cách thủy 800C trong 20 phút rồi làm lạnh ngay.",
      "B": "Đun cách thủy 800C trong 30 phút rồi làm lạnh ngay.",
      "C": "Đun cách thủy 1000C trong 20 phút rồi làm lạnh ngay.",
      "D": "Đun cách thủy 1000C trong 30 phút rồi làm lạnh ngay."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 42,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Lượng glucose trong máu ở mức bình thường là:",
    "options": {
      "A": "50 – 100 mg/dl.",
      "B": "75 – 110 mg/dl.",
      "C": "50 – 110 mg/dl.",
      "D": "75 – 120 mg/dl."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 43,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Glucose máu tăng trong, NGOẠI TRỪ:",
    "options": {
      "A": "Basedow.",
      "B": "Nhược giáp.",
      "C": "Viêm tụy.",
      "D": "Đái tháo đường."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 44,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Glucose máu tăng trong, NGOẠI TRỪ:",
    "options": {
      "A": "Cường giáp.",
      "B": "U tủy thượng thận.",
      "C": "Xơ gan.",
      "D": "U não."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 45,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Glucose máu giảm trong:",
    "options": {
      "A": "Sau ăn.",
      "B": "Viêm màng não.",
      "C": "Cường tụy.",
      "D": "Đái tháo đường."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 46,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict được dùng để:",
    "options": {
      "A": "Tìm glucose trong nước tiểu.",
      "B": "Định lượng glucose trong nước tiểu.",
      "C": "Tìm glucose trong máu.",
      "D": "Định lượng glucose trong máu."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 47,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict là phương pháp:",
    "options": {
      "A": "Định lượng.",
      "B": "Định tính.",
      "C": "Bán định lượng.",
      "D": "Cả định lượng và định tính."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 48,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (+) khi:",
    "options": {
      "A": "Có ít tủa, thuốc thử vấy màu xanh lá.",
      "B": "Có tủa màu vàng sẫm.",
      "C": "Có tủa đỏ gạch.",
      "D": "Có tủa nâu đậm."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 49,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (++) khi:",
    "options": {
      "A": "Có ít tủa, thuốc thử vấy màu xanh lá.",
      "B": "Có tủa màu vàng sẫm.",
      "C": "Có tủa đỏ gạch.",
      "D": "Có tủa nâu đậm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 50,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (+++) khi:",
    "options": {
      "A": "Có ít tủa, thuốc thử vấy màu xanh lá.",
      "B": "Có tủa màu vàng sẫm.",
      "C": "Có tủa đỏ gạch.",
      "D": "Có tủa nâu đậm."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 51,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (++++) khi:",
    "options": {
      "A": "Có ít tủa, thuốc thử vấy màu xanh lá.",
      "B": "Có tủa màu vàng sẫm.",
      "C": "Có tủa đỏ gạch.",
      "D": "Có tủa nâu đậm."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 52,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (+) thì:",
    "options": {
      "A": "Glucose < 3 g/L.",
      "B": "Glucose < 5 g/L.",
      "C": "Glucose từ 5 – 10 g/L.",
      "D": "Glucose từ 10 – 20 g/L."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 53,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (++) thì:",
    "options": {
      "A": "Glucose < 3 g/L.",
      "B": "Glucose < 5 g/L.",
      "C": "Glucose từ 5 – 10 g/L.",
      "D": "Glucose từ 10 – 20 g/L."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 54,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (+++) thì:",
    "options": {
      "A": "Glucose < 3 g/L.",
      "B": "Glucose < 5 g/L.",
      "C": "Glucose từ 5 – 10 g/L.",
      "D": "Glucose từ 10 – 20 g/L."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 55,
    "cluster": "1-100",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict (++++) thì:",
    "options": {
      "A": "Glucose > 20 g/L.",
      "B": "Glucose > 25 g/L.",
      "C": "Glucose từ 5 – 10 g/L.",
      "D": "Glucose từ 10 – 20 g/L."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 56,
    "cluster": "1-100",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Phản ứng dùng phương pháp đo điểm cuối, NGOẠI TRỪ:",
    "options": {
      "A": "Phản ứng định lượng Cholesterol toàn phần.",
      "B": "Phản ứng Biuret.",
      "C": "Phản ứng định lượng AST.",
      "D": "Phản ứng định lượng Triglycerid."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 57,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Trong phản ứng định lượng Cholesterol toàn phần, thuốc thử enzyme KHÔNG bao gồm:",
    "options": {
      "A": "Cholesterol Esterase.",
      "B": "Cholesterol Oxydase.",
      "C": "Catalase.",
      "D": "Peroxydase."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 58,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Cholesterol toàn phần, chất được tạo cuối cùng là:",
    "options": {
      "A": "Quinoneimine – Hồng cánh sen.",
      "B": "Quinoneimine – Xanh tím.",
      "C": "Quinone – Hồng cánh sen.",
      "D": "Quinone – Xanh tím."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 59,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Cholesterol toàn phần, sau khi cho thuốc thử và mẫu thử vào ống nghiệm:",
    "options": {
      "A": "Đun cách thủy 1000C trong 20 phút sau đó làm lạnh nhanh.",
      "B": "Đun cách thủy 800C trong 20 phút sau đó làm lạnh nhanh.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 10 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 60,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Cholesterol toàn phần, nồng độ cholesterol cao hơn thì phải pha loãng:",
    "options": {
      "A": "250 mg/dl.",
      "B": "500 mg/dl.",
      "C": "750 mg/dl.",
      "D": "1000 mg/dl."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 61,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Cholesterol toàn phần, nồng độ cholesterol cao hơn 750 mg/dl thì phải pha loãng:",
    "options": {
      "A": "2 lần.",
      "B": "3 lần.",
      "C": "4 lần.",
      "D": "5 lần."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 62,
    "cluster": "1-100",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Ở người bình thường, Choslesterol toàn phần ở mức:",
    "options": {
      "A": "50 – 100 mg/dl.",
      "B": "50 – 150 mg/dl.",
      "C": "150 – 250 mg/dl.",
      "D": "150 – 260 mg/dl."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 63,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tăng Cholesterol toàn phần tiên phát gặp khi:",
    "options": {
      "A": "Vàng da tắc mật.",
      "B": "Hội chứng thận hư.",
      "C": "Suy giáp tiên phát.",
      "D": "Tăng lipid gia đình."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 64,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Cholesterol toàn phần tăng trong, NGOẠI TRỪ:",
    "options": {
      "A": "Loạn glycogen gan.",
      "B": "Suy giáp.",
      "C": "Gan bị tổn thương nặng.",
      "D": "Rối loạn chuyển hóa lipid."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 65,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cholesterol toàn phần tăng trong:",
    "options": {
      "A": "Thiếu dinh dưỡng.",
      "B": "Cường giáp.",
      "C": "Gan bị tổn thương nặng.",
      "D": "Rối loạn chuyển hóa lipid."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 66,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Triglycerid trong mẫu thử được định lượng theo phương pháp:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 67,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Triglycerid, chất được tạo cuối cùng là:",
    "options": {
      "A": "Quinoneimine – Hồng cánh sen.",
      "B": "Quinoneimine – Xanh tím.",
      "C": "Quinone – Hồng cánh sen.",
      "D": "Quinone – Xanh tím."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 68,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#Enzyme"
    ],
    "question": "Trong phản ứng định lượng Triglycerid có sữ dụng enzyme, NGOẠI TRỪ:",
    "options": {
      "A": "Catalase.",
      "B": "Peroxydase.",
      "C": "Lipase.",
      "D": "Glycerokinase."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 69,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng Triglycerid, sau khi cho thuốc thử và mẫu thử vào ống nghiệm:",
    "options": {
      "A": "Đun cách thủy 1000C trong 20 phút sau đó làm lạnh nhanh.",
      "B": "Đun cách thủy 800C trong 20 phút sau đó làm lạnh nhanh.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 10 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 70,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phức màu trong phản ứng định lượng Triglycerid không còn chính xác sau:",
    "options": {
      "A": "15 phút.",
      "B": "30 phút.",
      "C": "45 phút.",
      "D": "60 phút."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 71,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Trong phản ứng định lượng Triglycerid, các yếu tố ảnh hưởng đến kết quả xét nghiệm, NGOẠI TRỪ:",
    "options": {
      "A": "Hb > 10 g/L.",
      "B": "Hb > 10 mg/dL.",
      "C": "Bilirubin > 40 mg/dL.",
      "D": "Bilirubin > 0,4 g/L."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 72,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Trong phản ứng định lượng Triglycerid, giá trị Triglycerid trong máu của người bình thường là:",
    "options": {
      "A": "100 – 150 mg/dL.",
      "B": "150 – 200 mg/dL.",
      "C": "200 – 250 mg/dL.",
      "D": "250 – 300 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 73,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Triglycerid nếu quá có thể dẫn đến viêm tụy cấp tính:",
    "options": {
      "A": "10 mmol/L.",
      "B": "11 mmol/L.",
      "C": "12 mmol/L.",
      "D": "13 mmol/L."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 74,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Triglycerid tăng trong:",
    "options": {
      "A": "Xơ gan do rượu.",
      "B": "Suy kiệt.",
      "C": "Cường giáp.",
      "D": "Xơ gan."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 75,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của phản ứng định lượng triglycerid là:",
    "options": {
      "A": "9,74 – 562 mg/dL.",
      "B": "9,74 – 1062 mg/dL.",
      "C": "8,74 – 562 mg/dL.",
      "D": "8,74 – 1062 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 76,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "HDL – Cholesterol trong mẫu thử được định lượng theo phương pháp:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 77,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Trong thí nghiệm định lượng HDL – Cholesterol trong máu, các thành phần sau bị bất hoạt do PVS/PEGME, NGOẠI TRỪ:",
    "options": {
      "A": "Chylomicrons.",
      "B": "Triglyceride.",
      "C": "LDL – Cholesterol.",
      "D": "VLDL – Cholesterol."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 78,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, chất được tạo cuối cùng là:",
    "options": {
      "A": "Quinoneimine – Hồng cánh sen.",
      "B": "Quinoneimine – Xanh tím.",
      "C": "Quinone – Hồng cánh sen.",
      "D": "Quinone – Xanh tím."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 79,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, sau mỗi lần thêm thuốc thử thì:",
    "options": {
      "A": "Đun cách thủy 1000C trong 20 phút sau đó làm lạnh nhanh.",
      "B": "Đun cách thủy 800C trong 20 phút sau đó làm lạnh nhanh.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 10 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 80,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, các yếu tố ảnh hưởng đến kết quả xét nghiệm, NGOẠI TRỪ:",
    "options": {
      "A": "Hb > 10 g/L.",
      "B": "Bilirubin > 30 mg/dL.",
      "C": "Bilirubin > 40 mg/dL.",
      "D": "Triglycerid > 2000 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 81,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, độ tuyến tính:",
    "options": {
      "A": "1,9 – 153 mg/dL.",
      "B": "1,9 – 193 mg/dL.",
      "C": "1,5 – 153 mg/dL.",
      "D": "1,5 – 193 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 82,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, giá trị bình thường ở nam là:",
    "options": {
      "A": "35,3 – 79,5 mg/dL.",
      "B": "35,3 – 88 mg/dL.",
      "C": "42 – 88 mg/dL.",
      "D": "42 – 79,5 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 83,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong phản ứng định lượng HDL – Cholesterol, giá trị bình thường ở nam là:",
    "options": {
      "A": "35,3 – 79,5 mg/dL.",
      "B": "35,3 – 88 mg/dL.",
      "C": "42 – 88 mg/dL.",
      "D": "42 – 79,5 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 84,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "HDL – Cholesterol tăng:",
    "options": {
      "A": "Giúp giảm nguy cơ xơ vữa động mạch.",
      "B": "Làm tăng nguy cơ xơ vữa động mạch.",
      "C": "Trong bệnh béo phì.",
      "D": "Khi hút thuốc lá."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 85,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Trong phản ứng định lượng LDL – Cholesterol, thuốc thử enzyme 2 là:",
    "options": {
      "A": "CHE + CHO.",
      "B": "Catalase.",
      "C": "Peroxydase.",
      "D": "Oxydase."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 86,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng LDL – Cholesterol, sau mỗi lần thêm thuốc thử thì:",
    "options": {
      "A": "Đun cách thủy 1000C trong 20 phút sau đó làm lạnh nhanh.",
      "B": "Đun cách thủy 800C trong 20 phút sau đó làm lạnh nhanh.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 10 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 87,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Nồng độ LDL – Cholesterol bình thường là:",
    "options": {
      "A": "< 120 mg/dL.",
      "B": "< 130 mg/dL.",
      "C": "< 140 mg/dL.",
      "D": "< 150 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 88,
    "cluster": "1-100",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Điều kiện để áp dụng công thức tính nồng độ LDL – Cholesterol dựa trên nồng độ các loại lipid còn lại là:",
    "options": {
      "A": "Triglycerid > 400 mg/dL.",
      "B": "Cholesterol toàn phần > 400 mg/dL.",
      "C": "Triglycerid < 400 mg/dL.",
      "D": "Cholesterol toàn phần < 400 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 89,
    "cluster": "1-100",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Phản ứng tìm Ceton trong nước tiểu (+) khi:",
    "options": {
      "A": "Phức chất màu tím.",
      "B": "Phức chất màu đỏ.",
      "C": "Kết tủa màu đỏ gạch.",
      "D": "Kết tủa màu đỏ nâu."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 90,
    "cluster": "1-100",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Trong nước tiểu bình thường có thể có:",
    "options": {
      "A": "Glucose.",
      "B": "Ceton.",
      "C": "Hb.",
      "D": "Bilirubin."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 91,
    "cluster": "1-100",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Chọn tập hợp gồm các chất hữu cơ bình thường có trong nước tiểu:",
    "options": {
      "A": "Acid uric, ure, glucose.",
      "B": "Protein, ure, aceton.",
      "C": "Ure, creatinin, acid uric.",
      "D": "Ure, acid uric, hemoglobin."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 92,
    "cluster": "1-100",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#NuocTieu"
    ],
    "question": "Nước tiểu có ceton khi, NGOẠI TRỪ:",
    "options": {
      "A": "Vận động cơ nhiều.",
      "B": "Cushing.",
      "C": "Bệnh đái tháo đường nặng.",
      "D": "Viêm tụy."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 93,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng Biuret dùng để:",
    "options": {
      "A": "Định lượng protein toàn phần trong huyết thanh.",
      "B": "Định lượng acid uric trong huyết thanh.",
      "C": "Định lượng bilirubin trong huyết thanh.",
      "D": "Định lượng HDL – Cholesterol trong huyết thanh."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 94,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong môi trường kiềm, protein trong huyết thanh phản ứng với Cu++ tạo thành phức màu:",
    "options": {
      "A": "Hồng cánh sen.",
      "B": "Màu tím hồng.",
      "C": "Màu đỏ.",
      "D": "Màu nâu đỏ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 95,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong phản ứng định lượng protein trong huyết thanh, sau khi cho chất thử và thuốc thử vào ống nghiệm:",
    "options": {
      "A": "Ủ ở 370C trong 5 phút.",
      "B": "Ủ ở 370C trong 10 phút.",
      "C": "Để ở nhiệt độ phòng thí nghiệm trong 10 phút.",
      "D": "Để ở nhiệt độ phòng thí nghiệm trong 20 phút."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 96,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Nồng độ protein huyết thanh bình thường là:",
    "options": {
      "A": "50 – 60 g/L.",
      "B": "60 – 70 g/L.",
      "C": "60 – 80 g/L.",
      "D": "70 – 80 g/L."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 97,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Nồng độ protein huyết thanh giảm trong, NGOẠI TRỪ:",
    "options": {
      "A": "Sốt kéo dài, mất nước liên tục.",
      "B": "Xơ gan.",
      "C": "Hội chứng thận hư.",
      "D": "Mất máu."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 98,
    "cluster": "1-100",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Nồng độ protein huyết thanh tăng trong:",
    "options": {
      "A": "Hội chứng thận hư.",
      "B": "Mất máu.",
      "C": "Bệnh Addison.",
      "D": "Xơ gan, viêm gan."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 99,
    "cluster": "1-100",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Acid uric trong mẫu thử được định lượng theo phương pháp:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 100,
    "cluster": "1-100",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Enzyme cần cho phản ứng định lượng acid uric là:",
    "options": {
      "A": "Urease.",
      "B": "Urinase.",
      "C": "Catalase.",
      "D": "Oxydase."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 101,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong phản ứng định lượng acid uric, nếu mẫu thử là nước tiểu thì cần pha loãng:",
    "options": {
      "A": "3 lần.",
      "B": "10 lần.",
      "C": "50 lần.",
      "D": "100 lần."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 102,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng acid uric, chất được tạo cuối cùng là:",
    "options": {
      "A": "Quinoneimine dye – Hồng cánh sen.",
      "B": "Quinoneimine – Xanh tím.",
      "C": "Quinone – Hồng cánh sen.",
      "D": "Quinone – Xanh tím."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 103,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng acid uric, khi cho thuốc thử và mẫu thử vào ống nghiệm:",
    "options": {
      "A": "Ủ ở 370C trong 5 phút.",
      "B": "Ủ ở 370C trong 10 phút.",
      "C": "Để ở nhiệt độ phòng thí nghiệm trong 10 phút.",
      "D": "Để ở nhiệt độ phòng thí nghiệm trong 20 phút."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 104,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phức màu trong phản ứng định lượng acid uric không còn chính xác sau:",
    "options": {
      "A": "15 phút.",
      "B": "30 phút.",
      "C": "45 phút.",
      "D": "60 phút."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 105,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Trong phản ứng định lượng acid uric, các yếu tố ảnh hưởng đến kết quả xét nghiệm, NGOẠI TRỪ:",
    "options": {
      "A": "Hb > 10 g/L.",
      "B": "Bilirubin > 30 mg/dL.",
      "C": "Bilirubin > 40 mg/dL.",
      "D": "Triglycerid > 2000 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 106,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Trong định lượng acid uric huyết thanh/huyết tương, giá trị bình thường ở nam là:",
    "options": {
      "A": "3,5 – 7,2 mg/dL.",
      "B": "3,5 – 5 mg/dL.",
      "C": "2,6 – 6 mg/dL.",
      "D": "2,6 – 7,2 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 107,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Trong định lượng acid uric huyết thanh/huyết tương, giá trị bình thường ở nữ là:",
    "options": {
      "A": "3,5 – 7,2 mg/dL.",
      "B": "3,5 – 5 mg/dL.",
      "C": "2,6 – 6 mg/dL.",
      "D": "2,6 – 7,2 mg/dL."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 108,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Trong định lượng acid uric nước tiểu, giá trị bình thường là:",
    "options": {
      "A": "250 – 500 mg/24 giờ.",
      "B": "250 – 750 mg/24 giờ.",
      "C": "500 – 750 mg/24 giờ.",
      "D": "500 – 600 mg/24 giờ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 109,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu",
      "#HuyetThanh"
    ],
    "question": "Nguyên nhân tiên phát làm tăng acid uric máu và nước tiểu là:",
    "options": {
      "A": "Bệnh Gout.",
      "B": "Bệnh đa hồng cầu, bạch cầu cấp.",
      "C": "Điều trị bằng tia X, chất phóng xạ.",
      "D": "Viêm thận mãn."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 110,
    "cluster": "101-200",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của định lượng acid uric là:",
    "options": {
      "A": "> 20 mg/dL.",
      "B": "< 20 mg/dL.",
      "C": "0,49 – 25 mg/dL.",
      "D": "5 -25 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 111,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Ure trong mẫu thử được định lượng theo phương pháp:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 112,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Enzyme nào cần trong phản ứng định lượng ure:",
    "options": {
      "A": "Urease.",
      "B": "Urinase.",
      "C": "Catalase.",
      "D": "Oxydase."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 113,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong phản ứng định lượng ure, nếu mẫu thử là nước tiểu thì cần pha loãng:",
    "options": {
      "A": "3 lần.",
      "B": "10 lần.",
      "C": "50 lần.",
      "D": "100 lần."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 114,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Trong phản ứng định lượng ure, các yếu tố ảnh hưởng đến kết quả xét nghiệm, NGOẠI TRỪ:",
    "options": {
      "A": "Hb > 7,5 g/L.",
      "B": "Bilirubin > 30 mg/dL.",
      "C": "Bilirubin > 40 mg/dL.",
      "D": "Triglycerid > 2000 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 115,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Ure máu bình thường ở người lớn là:",
    "options": {
      "A": "17 – 43 mg/dL.",
      "B": "11 – 36 mg/dL.",
      "C": "15 – 36 mg/dL.",
      "D": "18 – 45 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 116,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Ure máu bình thường ở trẻ 1 – 3 tuổi là:",
    "options": {
      "A": "11 – 36 mg/dL .",
      "B": "17 – 43 mg/dL.",
      "C": "15 – 36 mg/dL.",
      "D": "18 – 45 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 117,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Ure máu bình thường ở trẻ 4 – 13 tuổi là:",
    "options": {
      "A": "17 – 43 mg/dL.",
      "B": "11 – 36 mg/dL.",
      "C": "15 – 36 mg/dL.",
      "D": "18 – 45 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 118,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Ure máu bình thường ở trẻ 14 – 19 tuổi là:",
    "options": {
      "A": "17 – 43 mg/dL.",
      "B": "11 – 36 mg/dL.",
      "C": "18 – 36 mg/dL.",
      "D": "18 – 45 mg/dL."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 119,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Ure nước tiểu bình thường là:",
    "options": {
      "A": "15 – 26g/24 giờ.",
      "B": "26 – 43g/24 giờ.",
      "C": "26 – 35g/24 giờ.",
      "D": "35 – 43g/24 giờ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 120,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Ure máu / creatinin máu bình thường là:",
    "options": {
      "A": "10 – 20 [(mg/dl)/(mg/dl)].",
      "B": "20 – 35 [(mg/dl)/(mg/dl)].",
      "C": "35 – 45 [(mg/dl)/(mg/dl)].",
      "D": "45 – 55 [(mg/dl)/(mg/dl)]."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 121,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Ure máu tăng trong trường hợp:",
    "options": {
      "A": "Chức năng lọc của cầu thận giảm.",
      "B": "Suy gan.",
      "C": "Chế độ ăn thiếu protid.",
      "D": "Giảm thoái hóa protid."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 122,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Các bệnh lý sau làm tăng ure máu, NGOẠI TRỪ:",
    "options": {
      "A": "Gan tổn thương nặng.",
      "B": "Hội chứng thận cấp tính.",
      "C": "Tắc nghẽn đường tiểu do hẹp đường tiểu.",
      "D": "Viêm cầu thận cấp, viêm ống thận cấp."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 123,
    "cluster": "101-200",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong trường hợp thai nghén, chọn phát biểu đúng:",
    "options": {
      "A": "Nồng độ protein toàn phần trong huyết thanh bình thường.",
      "B": "Nồng độ protein toàn phần trong huyết thanh giảm.",
      "C": "Nồng độ ure trong huyết thanh tăng.",
      "D": "Nồng độ ure trong huyết thanh giảm."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 124,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong phản ứng định lượng creatinin, nếu mẫu thử là nước tiểu thì cần pha loãng:",
    "options": {
      "A": "3 lần.",
      "B": "10 lần.",
      "C": "50 lần.",
      "D": "100 lần."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 125,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng Creatinin, phương pháp được sử dụng là:",
    "options": {
      "A": "Đo động học đa điểm.",
      "B": "Đo điểm cuối.",
      "C": "Pha loãng dần.",
      "D": "Đo động học 2 điểm."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 126,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng creatinin, khi creatinin gặp picric acid trong môi trường kiềm sẽ tạo thành phức hợp tên là:",
    "options": {
      "A": "Creatin.",
      "B": "Creatinin.",
      "C": "Creatin phosphat.",
      "D": "Creatinin – picrate."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 127,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng định lượng creatinin, khi creatinin gặp picric acid trong môi trường kiềm sẽ tạo thành phức hợp có màu:",
    "options": {
      "A": "Vàng cam.",
      "B": "Hồng cánh sen.",
      "C": "Nâu đỏ.",
      "D": "Tím hồng."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 128,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong công thức tính độ thanh thải Creatinin, 1440 có ý nghĩa là:",
    "options": {
      "A": "Số giây trong 24 giờ.",
      "B": "Số giây trong một giờ.",
      "C": "Số phút trong 24 giờ.",
      "D": "Số phút trong một giờ."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 129,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Bình thường giá trị creatinin máu ở nam là:",
    "options": {
      "A": "0,1 – 0,5 mg/dL.",
      "B": "0,6 – 1,1 mg/dL.",
      "C": "0,5 – 0,9 mg/dL.",
      "D": "0,5 – 1,1 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 130,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Bình thường giá trị creatinin máu ở nữ là:",
    "options": {
      "A": "0,1 – 0,5 mg/dL.",
      "B": "0,6 – 1,1 mg/dL.",
      "C": "0,5 – 0,9 mg/dL.",
      "D": "0,5 – 1,1 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 131,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Bình thường giá trị creatinin nước tiểu là:",
    "options": {
      "A": "1000 – 1200 mg/12 giờ.",
      "B": "1000 – 1200 mg/24 giờ.",
      "C": "1000 – 1500 mg/12 giờ.",
      "D": "1000 – 1500 mg/24 giờ."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 132,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Độ thanh thải creatinin ở nam là:",
    "options": {
      "A": "45 – 90 ml/phút.",
      "B": "98 – 156 ml/phút.",
      "C": "95 – 160 ml/phút.",
      "D": "98 – 160 ml/phút."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 133,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Độ thanh thải creatinin ở nữ là:",
    "options": {
      "A": "45 – 90 ml/phút.",
      "B": "98 – 156 ml/phút.",
      "C": "95 – 160 ml/phút.",
      "D": "98 – 160 ml/phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 134,
    "cluster": "101-200",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Creatinin máu tăng trong các bệnh về:",
    "options": {
      "A": "Gan.",
      "B": "Thận.",
      "C": "Tụy.",
      "D": "Tiết niệu."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 135,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Giấy nhúng nước tiểu 3 thông số gồm:",
    "options": {
      "A": "pH, Glucose, Ceton.",
      "B": "pH, Ceton, Bilirubin.",
      "C": "Glucose, pH, Protein.",
      "D": "Glucose, Protein, Bilirubin."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 136,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Nhúng băng thử nước tiểu 3 thông số vào mẫu thử trong:",
    "options": {
      "A": "2 giây.",
      "B": "3 giây.",
      "C": "4 giây.",
      "D": "5 giây."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 137,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Băng thử nước tiểu 3 thông số không còn chính xác sau:",
    "options": {
      "A": "1 phút.",
      "B": "2 phút.",
      "C": "3 phút.",
      "D": "4 phút."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 138,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Nước tiểu bình thường có pH từ:",
    "options": {
      "A": "7 – 9.",
      "B": "5 – 7.",
      "C": "5 – 9.",
      "D": "6 – 7."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 139,
    "cluster": "101-200",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi thử nước tiểu 3 thông số, nước tiểu có glucose (+) khi kết quả có:",
    "options": {
      "A": "Màu xanh lam.",
      "B": "Màu nâu.",
      "C": "Màu vàng cam.",
      "D": "Màu xanh lá."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 140,
    "cluster": "101-200",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi thử nước tiểu 3 thông số, glucose cho kết quả âm tính giả khi:",
    "options": {
      "A": "Dụng cụ lẫn chất tẩy rửa.",
      "B": "Nồng độ ceton cao",
      "C": "Tỉ trọng nước tiểu cao.",
      "D": "Bệnh nhân dùng nhiều vitamin"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 141,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi thử nước tiểu 3 thông số, nước tiểu có protein (+) khi kết quả có:",
    "options": {
      "A": "Màu xanh lam.",
      "B": "Màu nâu.",
      "C": "Màu vàng nhạt.",
      "D": "Màu xanh lá."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 142,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi thử nước tiểu 3 thông số, protein cho kết quả dương tính giả khi:",
    "options": {
      "A": "pH nước tiểu acid.",
      "B": "Nước tiểu bệnh nhân quá trong.",
      "C": "Dụng cụ chứa nước tiểu có Acetat ammonium.",
      "D": "Ở một số bệnh nhân dùng nhiều vitamin"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 143,
    "cluster": "101-200",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "pH thấp nhất lúc:",
    "options": {
      "A": "Lúc ngủ dậy.",
      "B": "Sau bữa ăn 2 giờ.",
      "C": "Khoảng 14 – 16 giờ.",
      "D": "Bất kỳ lúc nào."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 144,
    "cluster": "101-200",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "pH cao nhất lúc:",
    "options": {
      "A": "Lúc ngủ dậy.",
      "B": "Sau bữa ăn.",
      "C": "Sau khi vận động.",
      "D": "Bất kỳ lúc nào."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 145,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Nước tiểu lấy để thử protein tốt nhất là nước tiểu:",
    "options": {
      "A": "Lần đi tiểu đầu lúc sáng sớm.",
      "B": "Lần đi tiểu trong khoảng 9 – 10 giờ sáng.",
      "C": "Lần đi tiểu sau bữa ăn.",
      "D": "Lần đi tiểu trong khoảng 3 – 4 giờ chiều."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 146,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 3 thông số, độ nhạy của thông số protein là:",
    "options": {
      "A": "5 – 10 mg/dL.",
      "B": "10 – 15 mg/dL.",
      "C": "15 – 20 mg/dL.",
      "D": "20 – 25 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 147,
    "cluster": "101-200",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 3 thông số, độ nhạy của thông số glucose là:",
    "options": {
      "A": "50 mg/dL.",
      "B": "100 mg/dL.",
      "C": "150 mg/dL.",
      "D": "200 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 148,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac",
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, thông số urobilinogen dựa trên nguyên tắc:",
    "options": {
      "A": "Muối diazonium + Urobilinogen + Aldehyde màu đỏ.",
      "B": "Muối diazonium + Urobilinogen + Aldehyde màu xanh.",
      "C": "Muối diazonium + Urobilinogen + Azo màu đỏ.",
      "D": "Muối diazonium + Urobilinogen + Azo màu xanh."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 149,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme",
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, thông số bạch cầu đi tìm sự có mặt của men trong bạch cầu hạt:",
    "options": {
      "A": "Catalase.",
      "B": "Peroxydase.",
      "C": "Esterase.",
      "D": "Uricase."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 150,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, cetone (+) có màu:",
    "options": {
      "A": "Màu xanh lá.",
      "B": "Màu đỏ.",
      "C": "Màu vàng.",
      "D": "Màu hồng."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 151,
    "cluster": "101-200",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của glucose là:",
    "options": {
      "A": "50 – 75 mg/dL.",
      "B": "75 – 100 mg/dL.",
      "C": "75 – 125 mg/dL.",
      "D": "75 – 150 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 152,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của bilirubin là:",
    "options": {
      "A": "0,1 – 0,4 mg/dL.",
      "B": "0,4 – 0,8 mg/dL.",
      "C": "0,8 – 1,2 mg/dL.",
      "D": "< 1,2 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 153,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của cetone là:",
    "options": {
      "A": "5 – 10 mg/dL.",
      "B": "10 – 15 mg/dL.",
      "C": "15 – 20 mg/dL.",
      "D": "20 – 25 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 154,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu",
      "#HuyetThanh"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của máu là:",
    "options": {
      "A": "0,015 – 0,032 mg/dL.",
      "B": "0,015 – 0,062 mg/dL.",
      "C": "0,01 – 0,032 mg/dL.",
      "D": "0,01 – 0,062 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 155,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của protein là:",
    "options": {
      "A": "5 – 10 mg/dL.",
      "B": "15 – 20 mg/dL.",
      "C": "15 – 30 mg/dL.",
      "D": "20 – 25 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 156,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của nitrite là:",
    "options": {
      "A": "< 0,06 mg/dL.",
      "B": "> 0,1 mg/dL.",
      "C": "0,06 – 0,1 mg/dL.",
      "D": "0,06 – 0,15 mg/dL."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 157,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Trong thử nước tiểu 10 thông số, độ nhạy của bạch cầu là:",
    "options": {
      "A": "5 – 15 tế bào/µL.",
      "B": "15 – 30 tế bào/µL.",
      "C": "30 – 45 tế bào/µL.",
      "D": "45 – 55 tế bào/µL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 158,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi thực hiện phản ứng định lượng bilirubin toàn phần cần:",
    "options": {
      "A": "Đun sôi cách thủy 5 phút.",
      "B": "Đun sôi cách thủy 3 phút.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 3 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 159,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của phản ứng định lượng Bilirubin toàn phần là:",
    "options": {
      "A": "0 – 15 mg/dL.",
      "B": "0 – 20 mg/dL.",
      "C": "15 – 25 mg/dL.",
      "D": "15 – 30 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 160,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị Bilirubin toàn phần bình thường ở người lớn là:",
    "options": {
      "A": "< 2 mg/dL.",
      "B": "2 – 3 mg/dL.",
      "C": "3 – 4 mg/dL.",
      "D": "< 3 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 161,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi thực hiện phản ứng định lượng Bilirubin trực tiếp cần:",
    "options": {
      "A": "Đun sôi cách thủy 5 phút.",
      "B": "Đun sôi cách thủy 3 phút.",
      "C": "Ủ ở 370C trong 5 phút.",
      "D": "Ủ ở 370C trong 3 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 162,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của phản ứng định lượng Bilirubin trực tiếp là:",
    "options": {
      "A": "0,18 – 20 mg/dL.",
      "B": "0,18 – 23 mg/dL.",
      "C": "0,18 – 30 mg/dL.",
      "D": "0.18 – 40 mg/dL."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 163,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi vàng da trước gan:",
    "options": {
      "A": "Bilirubin GT bình thường, Bilirubin TT tăng.",
      "B": "Cả Bilirubin GT và TT đều tăng.",
      "C": "Bilirubin GT tăng, Bilirubin TT bình thường.",
      "D": "Bilirubin GT tăng, Bilirubin TT giảm."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 164,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi vàng da tại gan:",
    "options": {
      "A": "Bilirubin GT bình thường, Bilirubin TT tăng.",
      "B": "Cả Bilirubin GT và TT đều tăng.",
      "C": "Bilirubin GT tăng, Bilirubin TT bình thường.",
      "D": "Bilirubin GT tăng, Bilirubin TT giảm."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 165,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi vàng da sau gan:",
    "options": {
      "A": "Bilirubin GT bình thường, Bilirubin TT tăng.",
      "B": "Cả Bilirubin GT và TT đều tăng.",
      "C": "Bilirubin GT tăng, Bilirubin TT bình thường.",
      "D": "Bilirubin GT tăng, Bilirubin TT giảm."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 166,
    "cluster": "101-200",
    "topic": "Định lượng Bilirubin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Vàng da trước gan gây ra bởi, NGOẠI TRỪ:",
    "options": {
      "A": "Thiếu men G6DP.",
      "B": "Tắc ống dẫn mật.",
      "C": "Hồng cầu dễ vỡ.",
      "D": "Sốt rét."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 167,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng Mayer dùng để:",
    "options": {
      "A": "Tìm Glucose trong nước tiểu.",
      "B": "Tìm Glucose trong máu.",
      "C": "Tìm Hemoglobin trong nước tiểu.",
      "D": "Tìm Creatinin trong nước tiểu."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 168,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Phản ứng Mayer dựa trên nguyên tắc, Hemoglobin có tác dụng như:",
    "options": {
      "A": "Peroxydase.",
      "B": "Oxidase.",
      "C": "Lipase.",
      "D": "Glucose oxidase."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 169,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng Mayer, khi thuốc thử là Phenolphtalein, hiện tượng quan sát được là:",
    "options": {
      "A": "Cho phức hợp màu đỏ gạch.",
      "B": "Cho kết tủa đỏ gạch.",
      "C": "Cho phức hợp màu đỏ.",
      "D": "Cho kết tủa màu đỏ."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 170,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng Mayer, sau không có hiện tượng thì xem như (-):",
    "options": {
      "A": "1 phút",
      "B": "2 phút",
      "C": "3 phút",
      "D": "4 phút"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 171,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng ALT/GPT, phương pháp được sử dụng là:",
    "options": {
      "A": "Đo động học đa điểm",
      "B": "Đo điểm cuối",
      "C": "Pha loãng dần",
      "D": "Đo động học 2 điểm"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 172,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac",
      "#Enzyme"
    ],
    "question": "Nguyên tắc của phương pháp định lượng ALT/GPT là xác định hoạt độ men:",
    "options": {
      "A": "Guanine Aminotransferase.",
      "B": "Cytosine Aminotransferase.",
      "C": "Alanin Aminotransferase.",
      "D": "Thymin Aminotransferase."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 173,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng ALT/GPT, nhiệt độ ủ là:",
    "options": {
      "A": "370C.",
      "B": "Nhiệt độ phòng thí nghiệm.",
      "C": "1000C.",
      "D": "800C."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 174,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng ALT/GPT, yếu tố ảnh hưởng đến kết quả xét nghiệm là:",
    "options": {
      "A": "Hb > 10 g/L, Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL.",
      "B": "Hb > 2,5 g/L, Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL.",
      "C": "Hb > 10 g/L, Bilirubin > 40 mg/dL, Triglycerides > 2000 mg/dL.",
      "D": "Hb > 0,75 g/L, Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 175,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp định lượng ALT/GPT, tăng hoạt độ là dấu hiệu của nhồi máu cơ tim:",
    "options": {
      "A": "Transaminase",
      "B": "Hepatopathies",
      "C": "Tranferase",
      "D": "Oxidase"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 176,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng ALT/GPT, tăng hoạt độ là dấu hiệu của loạn dưỡng cơ, tổn thương nội quan:",
    "options": {
      "A": "Transaminase",
      "B": "Hepatopathies",
      "C": "Tranferase",
      "D": "Oxidase"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 177,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong định lượng ALT/GPT, nồng độ bình thường ở nam là:",
    "options": {
      "A": "≤ 40 U/L",
      "B": "≤ 34 U/L",
      "C": "≤ 45 U/L.",
      "D": "≤ 50 U/L."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 178,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong định lượng ALT/GPT, nồng độ bình thường ở nữ là:",
    "options": {
      "A": "≤ 34 U/L",
      "B": "≤ 45 U/L",
      "C": "≤ 50 U/L.",
      "D": "≤ 40 U/L."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 179,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Khi nồng độ ALT/GPT tăng > 10 lần là dấu hiệu của:",
    "options": {
      "A": "Viêm gan cấp.",
      "B": "Hội chứng thận hư",
      "C": "Nhồi máu cơ tim..",
      "D": "Hội chứng hủy tế bào."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 180,
    "cluster": "101-200",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Nhồi máu cơ tim khi:",
    "options": {
      "A": "GOT < GPT.",
      "B": "GOT = GPT.",
      "C": "GOT > GPT.",
      "D": "Chỉ liên quan đến GPT"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 181,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của phản ứng ALT/GPT là:",
    "options": {
      "A": "4,4 -360 U/L",
      "B": "3,3 -360 U/L",
      "C": "4,4 -390 U/L",
      "D": "3,3 -390 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 182,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac",
      "#Enzyme"
    ],
    "question": "Nguyên tắc của phương pháp định lượng AST/GOT là xác định hoạt độ men:",
    "options": {
      "A": "Guanine Aminotransferase.",
      "B": "Aspartate Aminotransferase.",
      "C": "Alanin Aminotransferase.",
      "D": "Thymin Aminotransferase."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 183,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng AST/GOT, nhiệt độ ủ là:",
    "options": {
      "A": "370C.",
      "B": "Nhiệt độ phòng thí nghiệm.",
      "C": "1000C.",
      "D": "800C."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 184,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "AST hầu hết có ở:",
    "options": {
      "A": "Gan",
      "B": "Cơ bắp",
      "C": "Cơ tim",
      "D": "Tụy"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 185,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phương pháp định lượng AST/GOT, yếu tố ảnh hưởng đến kết quả xét nghiệm là:",
    "options": {
      "A": "Hb > 10 g/L, Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL.",
      "B": "Hb > 2,5 g/L, Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL.",
      "C": "Bilirubin > 40 mg/dL, Triglycerides > 2000 mg/dL.",
      "D": "Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 186,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong định lượng AST/GOT, nồng độ bình thường ở nam là:",
    "options": {
      "A": "≤ 40 U/L",
      "B": "≤ 35 U/L",
      "C": "≤ 45 U/L",
      "D": "≤ 50 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 187,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Trong định lượng AST/GOT, nồng độ bình thường ở nữ là:",
    "options": {
      "A": "≤ 40 U/L",
      "B": "≤ 34 U/L",
      "C": "≤ 31 U/L",
      "D": "≤ 50 U/L"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 188,
    "cluster": "101-200",
    "topic": "Hoạt độ Enzyme ALT/AST",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính của phản ứng AST/GOT là:",
    "options": {
      "A": "3,84 -360 U/L",
      "B": "2,84 -360 U/L",
      "C": "3,84 -390 U/L",
      "D": "2,84 -390 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 189,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Nên xét nghiệm trong vòng sau khi lấy nước tiểu:",
    "options": {
      "A": "01 giờ",
      "B": "02 giờ",
      "C": "03 giờ",
      "D": "04 giờ"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 190,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#NuocTieu"
    ],
    "question": "Cách lấy mẫu nước tiểu, NGOẠI TRỪ:",
    "options": {
      "A": "Bỏ phần nước tiểu đầu.",
      "B": "Không làm xét nghiệm cặn lắng với nước tiểu để trong tủ lạnh.",
      "C": "Tốt nhất nên lấy nước tiểu vào lúc sáng sớm.",
      "D": "Nước tiểu sau khi soi cặn lắng không thể làm xét nghiệm khác được."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 191,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Rót nước tiểu vào ống ly tâm tới:",
    "options": {
      "A": "½ ống",
      "B": "2/3 ống",
      "C": "3/4 ống",
      "D": "1/3 ống"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 192,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Quay ly tâm với tốc độ bao nhiêu, trong bao lâu:",
    "options": {
      "A": "1000 vòng/phút – 3 phút.",
      "B": "1500 vòng/phút – 5 phút.",
      "C": "1000 vòng/phút – 5 phút.",
      "D": "1500 vòng/phút – 3 phút."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 193,
    "cluster": "101-200",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Để nhìn tổng quang trường, ta dùng:",
    "options": {
      "A": "Vật kính 10X",
      "B": "Vật kính 20X",
      "C": "Vật kính 30X",
      "D": "Vật kính 40X"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 194,
    "cluster": "101-200",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Để xác định loại tế bào, ta dùng:",
    "options": {
      "A": "Vật kính 10X",
      "B": "Vật kính 20X",
      "C": "Vật kính 30X",
      "D": "Vật kính 40X"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 195,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Bạch cầu có kích thước:",
    "options": {
      "A": "Lớn gấp 1,5 đến 2 lần hồng cầu.",
      "B": "Lớn gấp 1,5 đến 3 lần hồng cầu.",
      "C": "Lớn gấp 2 lần hồng cầu.",
      "D": "Lớn gấp 3 lần hồng cầu."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 196,
    "cluster": "101-200",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Wohlgemuth dùng để:",
    "options": {
      "A": "Định lượng Amylase trong huyết thanh.",
      "B": "Định lượng CK-MB trong máu.",
      "C": "Định lượng Amylase trong nước tiểu.",
      "D": "Xác định hoạt độ Amylase trong nước tiểu."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 197,
    "cluster": "101-200",
    "topic": "Định tính Glucid",
    "type": "special",
    "subType": "Chỉ có 2 lựa chọn",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Định nghĩa 1 đơn vị Wohlgemuth: là lượng amylase tối thiểu có khả năng thủy phân 2 ml dung dịch hồ tinh bột 0,1% ở 370C trong 30 phút. Định nghĩa trên: (1ml)",
    "options": {
      "A": "Đúng.",
      "B": "Sai."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 198,
    "cluster": "101-200",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Sau khi khi cho nước tiểu và hồ tinh bột vào ống nghiệm:",
    "options": {
      "A": "Đun sôi 1000C cách thủy 30 phút.",
      "B": "Đun sôi 1000C cách thủy 20 phút.",
      "C": "Đun sôi 370C cách thủy trong 30 phút.",
      "D": "Đun sôi ở 370C cách thủy trong 20 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 199,
    "cluster": "101-200",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Hoạt độ Amylase trong nước tiểu bình thường:",
    "options": {
      "A": "8 – 64 đơn vị Wohlgemuth.",
      "B": "8 – 32 đơn vị Wohlgemuth.",
      "C": "8 – 16 đơn vị Wohlgenmuth.",
      "D": "8 – 128 đơn vị Wohlgemuth."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 200,
    "cluster": "101-200",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Amylase tăng quá 200 đơn vị trong trường hợp:",
    "options": {
      "A": "Viêm gan",
      "B": "Viêm tụy cấp",
      "C": "Xơ gan",
      "D": "Suy thận"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 201,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp định lượng Amylase trong huyết thanh, phương pháp được sử dụng là:",
    "options": {
      "A": "Đo động học đa điểm",
      "B": "Đo điểm cuối",
      "C": "Pha loãng dần",
      "D": "Đo động học 2 điểm"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 202,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh",
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp định lượng Amylase trong huyết thanh, độ tuyến tính là:",
    "options": {
      "A": "10,8 – 1400 U/L",
      "B": "9,8 – 1400 U/L",
      "C": "10,8 – 1500 U/L",
      "D": "9,8 – 1500 U/L"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 203,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Amylase trong huyết thanh bình thường:",
    "options": {
      "A": "< 50 U/L",
      "B": "< 60 U/L",
      "C": "< 70 U/L",
      "D": "< 80 U/L"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 204,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Amylase trong nước tiểu bình thường là:",
    "options": {
      "A": "< 300 U/L",
      "B": "< 400 U/L",
      "C": "< 500 U/L",
      "D": "< 600 U/L"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 205,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp định lượng Amylase trong huyết thanh, yếu tố ảnh hưởng đến kết quả xét nghiệm là:",
    "options": {
      "A": "Hb > 10 g/L, Bilirubin > 40 mg/dL, Triglycerides > 2000 mg/dL.",
      "B": "Hb > 2,5 g/L, Bilirubin > 40 mg/dL, Triglycerides > 2000 mg/dL.",
      "C": "Bilirubin > 40 mg/dL, Triglycerides > 2000 mg/dL.",
      "D": "Bilirubin > 30 mg/dL, Triglycerides > 2000 mg/dL."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 206,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh",
      "#HuyetThanh"
    ],
    "question": "Trong phương pháp định lượng CK-MB trong máu, độ tuyến tính là:",
    "options": {
      "A": "6,1 – 1400 U/L",
      "B": "7,1 – 1400 U/L",
      "C": "6,1 – 1200 U/L",
      "D": "7,1 – 1200 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 207,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Trong định CK-MB trong máu, giá trị bình thường:",
    "options": {
      "A": "≤ 20 IU/L.",
      "B": "≤ 25 IU/L.",
      "C": "≤ 30 IU/L.",
      "D": "≤ 35 IU/L."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 208,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Thời gian bán hủy của CK-MB trong huyết tương là khoảng:",
    "options": {
      "A": "06 giờ.",
      "B": "12 giờ.",
      "C": "24 giờ.",
      "D": "32 giờ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 209,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "CK-MB dùng để chẩn đoán sớm nhồi máu cơ tim, vì CK-MB luôn tăng cao:",
    "options": {
      "A": "2-4 giờ.",
      "B": "4-6 giờ.",
      "C": "8-12 giờ.",
      "D": "12-24 giờ."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 210,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc của phản ứng Rivalta là:",
    "options": {
      "A": "Protein bị đông kết bởi acid sunfuric.",
      "B": "Protein bị kết tủa bởi acid sunfuric.",
      "C": "Protein bị đông kết bởi acid acetic.",
      "D": "Protein bị kết tủa bởi acid sunfuric."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 211,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Rivanlta (+) có nghĩa:",
    "options": {
      "A": "Dịch tiết – Protein > 30 g/L.",
      "B": "Dịch thấm – Protein > 30 g/L",
      "C": "Dịch tiết – Protein < 30 g/L",
      "D": "Dịch thấm – Protein < 30 g/L."
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 212,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Rivanlta (-) có nghĩa:",
    "options": {
      "A": "Dịch tiết – Protein > 30 g/L.",
      "B": "Dịch thấm – Protein > 30 g/L",
      "C": "Dịch tiết – Protein < 30 g/L",
      "D": "Dịch thấm – Protein < 30 g/L."
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 213,
    "cluster": "201-296",
    "topic": "Định lượng Ure & Creatinin",
    "type": "special",
    "subType": "Ghi chú / Tự luận",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cho biết: VNT / 24 giờ = 1400 ml: - Nồng độ Creatinin / NT: 90 mg /dl. - Nồng độ Creatinin / HT: 1,2 mg/dl → Tính Creatinin Clearance ? 𝐶 = 90∗1400 1,2∗1440 = 72,916 ml/phút",
    "options": {},
    "answer": [
      "72.92"
    ],
    "note": "Công thức & kết quả: C = (90 × 1400) / (1,2 × 1440) = 72,916 ml/phút (≈ 72.92)"
  },
  {
    "id": 214,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Màu của phản ứng Molisd:",
    "options": {
      "A": "Xanh",
      "B": "Đỏ",
      "C": "Tím",
      "D": "Hồng"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 215,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru",
      "#HuyetThanh"
    ],
    "question": "Yếu tố ảnh hưởng đến kết quả xét nghiệm định lượng amylase huyết thanh, Ngoại trừ:",
    "options": {
      "A": "Hb > 0,25 g/dl",
      "B": "Bilirubin > 40mg/dl",
      "C": "Triglycerid > 2mg/dl",
      "D": "Triglycerid < 2mg/dl"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 216,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Cholesterol ester---> cholesterol emzym xúc tác là:",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 217,
    "cluster": "201-296",
    "topic": "Định lượng & Tìm Glucose",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phương pháp Benedict:",
    "options": {
      "A": "+, glucose < 5g/l -> màu xanh lá",
      "B": "++, glucose < 5-10g/l ->màu vàng sẫm",
      "C": "+++, glucose < 10-20g/l-> màu đỏ gạch",
      "D": "++++, glucose > 20g/l ->màu nâu đạm",
      "E": "(-) -> màu lam, trong suốt"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 218,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Giá trị huyết thanh/huyết tương bình thường Nam: (Chọn nhiều đáp án)",
    "options": {
      "A": "210-432 umol/l",
      "B": "156-360 umol/l",
      "C": "2,6-6,0 mg/l",
      "D": "3,5-7,2 mg/dl",
      "E": "250-750 mg/24 giờ",
      "F": "1,5-4,5 mmol/24 giờ"
    },
    "answer": [
      "A",
      "D",
      "E"
    ],
    "note": ""
  },
  {
    "id": 219,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Phản ứng định lượng LDL có bao nhiêu giai đoạn:",
    "options": {
      "A": "1 giai đoạn",
      "B": "2 giai đoạn",
      "C": "3 giai đoạn",
      "D": "4 giai đoạn"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 220,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Thời gian để dung dịch đo protein toàn phần trong huyết thanh:",
    "options": {
      "A": "10 phút",
      "B": "15 phút",
      "C": "20 phút",
      "D": "25 phút"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 221,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong viêm tụy cấp amylase niệu có trị số tối đa lúc:",
    "options": {
      "A": "6-12 giờ",
      "B": "12-24 giờ",
      "C": "24-36giờ",
      "D": "12-36 giờ"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 222,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cholesterol giảm trong:",
    "options": {
      "A": "Hội chứng thận hư",
      "B": "Vàng da tắc mật",
      "C": "Suy tuyến giáp",
      "D": "Cường giáp"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 223,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Quinonemine có màu gì:",
    "options": {
      "A": "Xanh",
      "B": "Đỏ",
      "C": "Tím",
      "D": "Hồng"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 224,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu",
      "#HuyetThanh"
    ],
    "question": "Giá trị bình thường của amylase trong huyết thanh và nước tiểu:",
    "options": {
      "A": "< 80 U/L, < 500 U/L",
      "B": "> 80 U/L, < 500 U/L",
      "C": "< 80 U/L, >500 U/L",
      "D": "> 80 U/L, > 500 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 225,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Sản phẩm trung gian của quá trình thủy phân tinh bột hoặc glycogen:",
    "options": {
      "A": "Dextrin",
      "B": "Dextran",
      "C": "Pyurat",
      "D": "Asparat"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 226,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Giá trị huyết thanh/huyết tương bình thường Nữ: (Chọn nhiều đáp án)",
    "options": {
      "A": "210-432 umol/l",
      "B": "156-360 umol/l",
      "C": "2,6-6,0 mg/l",
      "D": "3,5-7,2 mg/dl",
      "E": "250-750 mg/24 giờ",
      "F": "1,5-4,5 mmol/24 giờ"
    },
    "answer": [
      "B",
      "C"
    ],
    "note": ""
  },
  {
    "id": 227,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị bình thường của tryglycerid:",
    "options": {
      "A": "150-260 mg/dl",
      "B": "150-200 mg/dl",
      "C": "< 130 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 228,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Nguồn gốc acid Uric:",
    "options": {
      "A": "Base purin",
      "B": "Tế bào chết hàng loạt",
      "C": "NH3",
      "D": "Acid axetic"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 229,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#Enzyme"
    ],
    "question": "Các loại Emzym có trong phản ứng định lượng LDL: (Chọn nhiều đáp án)",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase",
      "E": "Glycerokinase",
      "F": "PVS/PEGME",
      "G": "Catalase",
      "H": "Lipase LPL",
      "L": "CHE+CHO"
    },
    "answer": [
      "A",
      "C",
      "D",
      "F",
      "G",
      "L"
    ],
    "note": ""
  },
  {
    "id": 230,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "special",
    "subType": "Ghi chú / Tự luận",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cho các phản ứng: * Phản ứng Molish: glucose, fructose, saccharose, hồ tinh bột, lactose * Phản ứng fehling: glucose, fructose, lactose",
    "options": {},
    "answer": [
      "Ghi nhận"
    ],
    "note": "Ghi nhớ: Phản ứng Molish (+): glucose, fructose, saccharose, hồ tinh bột, lactose | Phản ứng Fehling (+): glucose, fructose, lactose"
  },
  {
    "id": 231,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Protein trong huyết thanh phản ứng với Cu++ tạo phức hợp màu gì:",
    "options": {
      "A": "Tím hồng",
      "B": "Xanh tím",
      "C": "Nâu đỏ",
      "D": "Cam"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 232,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "special",
    "subType": "Đáp án đặc biệt",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Các bước sóng:",
    "options": {
      "A": "Cholesterol 500 nm",
      "B": "Tryglycerid 505nm",
      "C": "LDL 500 nm",
      "D": "HDL 578 nm"
    },
    "answer": [
      "Phù hợp"
    ],
    "note": "Tất cả các bước sóng A, B, C, D đều phù hợp"
  },
  {
    "id": 233,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Nồng độ protein trong huyết thanh bình thường là:",
    "options": {
      "A": "50-80 g/L",
      "B": "60-80 g/L",
      "C": "70-80 g/L",
      "D": "80-90 g/L"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 234,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tryglycerid tăng bao nhiêu có thể dẫn đến viêm tụy cấp tính:",
    "options": {
      "A": "11 mmol/l",
      "B": "11 ml/l",
      "C": "11 mg/dl",
      "D": "11mg/l"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 235,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Độ ổn đinh huyết tương/huyết thanh -200C trong xét nghiệm tryglycerid là:",
    "options": {
      "A": "3 tháng",
      "B": "6 tháng",
      "C": "9 tháng",
      "D": "ít nhất 1 năm"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 236,
    "cluster": "201-296",
    "topic": "Định lượng & Tìm Glucose",
    "type": "special",
    "subType": "Ghi chú / Tự luận",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Glucose tăng khi: u não, u tủy thượng thận",
    "options": {},
    "answer": [
      "Ghi nhận"
    ],
    "note": "Ghi nhớ: Glucose máu tăng khi u não, u tủy thượng thận"
  },
  {
    "id": 237,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Dung dịch để đấp lên vết phỏng do vật nóng:",
    "options": {
      "A": "Acid picric",
      "B": "Acid acetic",
      "C": "Acid boric",
      "D": "Na bicarbonate 1%"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 238,
    "cluster": "201-296",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Thuốc thử trong phản ứng nelson:",
    "options": {
      "A": "Naphtol 1%",
      "B": "Enediols",
      "C": "Arsenomolydat",
      "D": "Benedict"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 239,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tăng nhu cầu protein sinh lý gặp trong: (Còn lại là tăng bệnh lý)",
    "options": {
      "A": "Tiêu chảy",
      "B": "U đa tủy",
      "C": "Thai nghén",
      "D": "Sốt kéo dài"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 240,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Thời gian ủ trong định lượng tryglycerid:",
    "options": {
      "A": "Không cần ủ",
      "B": "1 phút 370C",
      "C": "5 phút 370C",
      "D": "10 phút 370C"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 241,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Kết quả của phản ứng fehling:",
    "options": {
      "A": "Dung dịch đỏ gạch",
      "B": "Kết tủa đỏ gạch",
      "C": "Kết tủa xanh lý",
      "D": "Dung dịch xanh dương"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 242,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#TriSoBinhThuong",
      "#NuocTieu"
    ],
    "question": "Giá trị Acid Uric nước tiểu bình thường: (Chọn nhiều đáp án)",
    "options": {
      "A": "210-432 umol/l",
      "B": "156-360 umol/l",
      "C": "2,6-6,0 mg/l",
      "D": "3,5-7,2 mg/dl",
      "E": "250-750 mg/24 giờ",
      "F": "1,5-4,5 mmol/24 giờ"
    },
    "answer": [
      "E",
      "F"
    ],
    "note": ""
  },
  {
    "id": 243,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Bệnh lý lâm sàng làm tăng CK-MB, ngoại trừ:",
    "options": {
      "A": "Nhồi máu cơ tim cấp",
      "B": "Loạn dưỡng cơ",
      "C": "Bỏng nhiệt",
      "D": "Suy thận"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 244,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Cholesterol---> cholesterol -3-one emzym xúc tác là:",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 245,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Thuốc thử phản ứng Wohlgemuth là:",
    "options": {
      "A": "Nacl 90/00, DD hồ tinh bột 10/00, Iod N/50",
      "B": "Nacl 50/00, DD hồ tinh bột 10/00, Iod N/50",
      "C": "Nacl 90/00, DD hồ tinh bột 10/00, Iod N/10",
      "D": "Nacl 7,50/00, DD hồ tinh bột 10/00, Iod N/10"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 246,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "special",
    "subType": "Ghi chú / Tự luận",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Hóa chất phù hợp với từng loại xử trí là: A. Bỏng acid ở da Na carbonate 8% B. Bỏng kiềm ở da Acid picric 3% C. Bỏng acid ở mắt Na bicarbonate 1% D. Bỏng kiềm ở mắt Acid boric 1% E. Ngộ độc acid Na bicarbonate 1% F. Ngộ độc kiềm Acid boric 1%",
    "options": {},
    "answer": [
      "Nối câu"
    ],
    "note": "Ghép cặp chuẩn: Bỏng acid da -> Na carbonate 8% | Bỏng kiềm da -> Acid picric 3% | Bỏng acid mắt -> Na bicarbonate 1% | Bỏng kiềm mắt -> Acid boric 1% | Ngộ độc acid -> Na bicarbonate 1% | Ngộ độc kiềm -> Acid boric 1%"
  },
  {
    "id": 247,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Độ ổn định huyết tương/huyết thanh ở 4-80C là:",
    "options": {
      "A": "2 ngày",
      "B": "5 ngày",
      "C": "7 ngày",
      "D": "12 tuần"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 248,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Endoamylase hay alpha-amylase có nguồn gốc từ:",
    "options": {
      "A": "Tuyến thượng thận",
      "B": "Tuyến tụy",
      "C": "Tuyến giáp",
      "D": "Tuyến cận giáp"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 249,
    "cluster": "201-296",
    "topic": "Định lượng Ure & Creatinin",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Emzym trong định lượng ure:",
    "options": {
      "A": "Uricase",
      "B": "Urecase",
      "C": "Urioxydase",
      "D": "Ureoxydase"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 250,
    "cluster": "201-296",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong",
      "#HuyetThanh"
    ],
    "question": "Giá trị bình thường glucose trong huyết tương",
    "options": {
      "A": "65-100mg/dl (4,3-6.0 mmol/l)",
      "B": "65-100mg/l (4,3-6.0 mmol/l)",
      "C": "75-100mg/dl (4,3-6.0 mmol/l)",
      "D": "75-100mg/l (4,3-6.0 mmol/l)"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 251,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng wohlgemuth ở ống số 4 có độ pha loãng là",
    "options": {
      "A": "1/8",
      "B": "1/16",
      "C": "1/32",
      "D": "1/64"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 252,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng wohlgemuth ở ống số 8 có độ pha loãng là",
    "options": {
      "A": "0",
      "B": "1/32",
      "C": "1/64",
      "D": "1/128"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 253,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Độ ổn định huyết tương/ huyết thanh ở -20 độ c trong xét nghiệm HDL là",
    "options": {
      "A": "2 ngày",
      "B": "5 ngày",
      "C": "7 ngày",
      "D": "12 tuần"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 254,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Thuốc thử trong phản ứng Molish:",
    "options": {
      "A": "Naphtol 1%",
      "B": "Enediols",
      "C": "Arsenomolyddat",
      "D": "Benedict"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 255,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Thuốc thử Lugol 1% có thành phần.....+..... RỒI THÊM 100ML NƯỚC CẤT:",
    "options": {
      "A": "IOD 0,1G + 0,2G KI",
      "B": "IOD 0,2G + 0,1G KI",
      "C": "IOD 1G + 2G KI",
      "D": "IOD 2G + 1G KI"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 256,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị bình thường của LDL",
    "options": {
      "A": "150-260mg/dl",
      "B": "150-200mg/dl",
      "C": "<130 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 257,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#Enzyme"
    ],
    "question": "Các loại Emzym có trong phản ứng định lượng HDL: (Chọn nhiều đáp án)",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase",
      "E": "Glycerokinase",
      "F": "PVS/PEGME",
      "G": "Catalase",
      "H": "Lipase LPL",
      "L": "CHE+CHO"
    },
    "answer": [
      "A",
      "C",
      "D",
      "F",
      "G"
    ],
    "note": ""
  },
  {
    "id": 258,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Emzym trong định lượng Acid uric",
    "options": {
      "A": "Uricase",
      "B": "Urecase",
      "C": "Urioxydase",
      "D": "Ureoxydase"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 259,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NgoaiTru"
    ],
    "question": "Thể ceton gặp trong, ngoại trừ:",
    "options": {
      "A": "Đái tháo đường nặng",
      "B": "Nhịn đói, nôn ói nhiều",
      "C": "Ăn nhiều đạm",
      "D": "Cushing"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 260,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Thuốc thử của phương pháp định lượng amylase huyết thanh",
    "options": {
      "A": "MES buffer, Natri chloride, sodium chlorid, potassium thiocyanate, Sodium azide, CNPG",
      "B": "NES buffer, cancium chloride, sodium chlorid, potassium thiocyanate",
      "C": "MES buffer, cancium chloride, sodium chlorid, potassium thiocyanate",
      "D": "MES buffer, cancium chloride, Natri chlorid, potassium thiocyanate"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 261,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tryglycerid tăng trong",
    "options": {
      "A": "Xơ gan",
      "B": "Suy kiệt",
      "C": "Bệnh mạn tính",
      "D": "Xơ gan do rượu"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 262,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#Enzyme"
    ],
    "question": "Phức hợp quinonemine được tạo thành nhớ xúc tác của emzym",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3- phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 263,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac",
      "#NuocTieu"
    ],
    "question": "Nguyên tắc phản ứng xác định hoạt độ amylase trong nước tiểu",
    "options": {
      "A": "Phương pháp pha loãng dần nước tiểu để tìm lượng enzym tối thiểu phân hủy hết 2ml dd hồ tinh bột 10/0 ở 370C trong 30p",
      "B": "Phương pháp pha loãng dần nước tiểu để tìm lượng enzym tối thiểu phân hủy hết 2ml dd hồ tinh bột 10/00 ở 420C trong 30p",
      "C": "Phương pháp pha loãng dần nước tiểu để tìm lượng enzym tối thiểu phân hủy hết 2ml dd hồ tinh bột 10/00 ở 370C trong 40p",
      "D": "Phương pháp pha loãng dần nước tiểu để tìm lượng enzym tối thiểu phân hủy hết 2ml dd hồ tinh bột 10/00 ở 370C trong 30p"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 264,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Để ngăn kết tủa acid uric ta làm:",
    "options": {
      "A": "15ml NAOH 5M để giữ PH >8",
      "B": "15ml NAOH 5M để giữ PH >6",
      "C": "10ml NAOH 5M để giữ PH >8",
      "D": "10ml NAOH 5M để giữ PH >6"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 265,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Trong nhồi máu cơ tim CK-MB sẽ tăng cao nhất trong khoảng thời gian",
    "options": {
      "A": "6-12 giờ",
      "B": "12-18 giờ",
      "C": "18-24 giờ",
      "D": "23-36 giờ"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 266,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Tỉ lệ pha loãng ure nước tiểu là",
    "options": {
      "A": "1:9",
      "B": "1:1",
      "C": "1:100",
      "D": "3:97"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 267,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tăng acid uric nguyên phát",
    "options": {
      "A": "Đa hồng cầu, bạch cầu cấp, u hạch",
      "B": "Xạ trị, hóa trị",
      "C": "Viêm thận, suy thận",
      "D": "Gout"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 268,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị bình thường của HDL ở nam",
    "options": {
      "A": "15-26mg/dl",
      "B": "35,2-79,5mg/dl",
      "C": "42-88 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 269,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Sản phẩm cuối cùng của quá trình thủy phân tinh bột hoặc glycogen là",
    "options": {
      "A": "Manto, glucos",
      "B": "Sacaro, gluco",
      "C": "Manto, fructo",
      "D": "Fructo, glucos"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 270,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#Enzyme",
      "#HuyetThanh"
    ],
    "question": "Các loại Emzym có trong phản ứng định lượng CHOLESTEROL toàn phần trong máu: (Chọn nhiều đáp án)",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase",
      "E": "Glycerokinase",
      "F": "PVS/PEGME",
      "G": "Catalase",
      "H": "Lipase LPL",
      "L": "CHE+CHO"
    },
    "answer": [
      "A",
      "C",
      "D"
    ],
    "note": ""
  },
  {
    "id": 271,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị bình thường của HDL ở nữ",
    "options": {
      "A": "15-26mg/dl",
      "B": "35,2-79,5mg/dl",
      "C": "42-88 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 272,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Chỉ có 3 lựa chọn",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "HDL tăng có tác dụng",
    "options": {
      "A": "Giảm nguy cơ sơ vữa động mạch và bệnh mạch vành",
      "B": "Tăng nguy cơ sơ vữa động mạch và bệnh mạch vành",
      "C": "Chưa thấy mối liên hệ"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 273,
    "cluster": "201-296",
    "topic": "Định tính Glucid",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Trong phản ứng wohlgemuth ống còn tinh bột có màu",
    "options": {
      "A": "Xanh dương",
      "B": "Màu trung gian",
      "C": "Không màu",
      "D": "Màu tím"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 274,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "QUINONE có màu gì?",
    "options": {
      "A": "Xanh tím",
      "B": "Hồng cánh sen",
      "C": "Đỏ gạch",
      "D": "Tím"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 275,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Bảo quản huyết tương/ huyết thanh -200C trong xét nghiệm acid uric là",
    "options": {
      "A": "3 tháng",
      "B": "6 tháng",
      "C": "9 tháng",
      "D": "ít nhất 1 năm"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 276,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NguyenTac"
    ],
    "question": "Nguyên tắc phản ứng Rivalta",
    "options": {
      "A": "Protein bị đông kết bởi acid lactic",
      "B": "Protein bị đông kết bởi acid acetic",
      "C": "Protein bị đông kết bởi acid citrit",
      "D": "Protein bị đông kết bởi kiềm yếu"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 277,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Nhiều đáp án / >4 lựa chọn",
    "tags": [
      "#Enzyme"
    ],
    "question": "Các loại Emzym có trong phản ứng định lượng Triglycerid: (Chọn nhiều đáp án)",
    "options": {
      "A": "Cholesterol Esterase",
      "B": "Glycerol -3-phosphate oxidase",
      "C": "Cholesterol Oxydase",
      "D": "Peroxydase",
      "E": "Glycerokinase",
      "F": "PVS/PEGME",
      "G": "Catalase",
      "H": "Lipase LPL",
      "L": "CHE+CHO"
    },
    "answer": [
      "B",
      "D",
      "E",
      "H"
    ],
    "note": ""
  },
  {
    "id": 278,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính accid uric",
    "options": {
      "A": "49-250 mg/dl",
      "B": "0,49-25mg/dl",
      "C": "0,49-25g/l",
      "D": "0,49-25mmol/l"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 279,
    "cluster": "201-296",
    "topic": "Định lượng & Tìm Glucose",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Khi nào glucose có trong nước tiểu?",
    "options": {
      "A": "Khi vượt ngưỡng 170 mg/dl hay 170mg%",
      "B": "Khi vượt ngưỡng 180 mg/dl hay 180mg%",
      "C": "Khi thấp hơn 180 mg/dl hay 180mg%",
      "D": "Bình thường glucose có trong nước tiểu."
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 280,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh"
    ],
    "question": "Độ tuyến tính HDL",
    "options": {
      "A": "15-26 mg/dl",
      "B": "35,2-79,5 mg/dl",
      "C": "42-88 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "D"
    ],
    "note": ""
  },
  {
    "id": 281,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#TriSoBinhThuong"
    ],
    "question": "Giá trị bình thường của cholesterol",
    "options": {
      "A": "150-260mg/dl",
      "B": "150-200mg/dl",
      "C": "<130 mg/dl",
      "D": "1,9-193 mg/dl"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 282,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Tỉ lệ pha loàng acid uric nước tiểu là",
    "options": {
      "A": "1:9",
      "B": "1:1",
      "C": "1:100",
      "D": "3:97"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 283,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Cholesterol tăng tiên phát trong:",
    "options": {
      "A": "Bệnh tăng lipid gia đình",
      "B": "Vàng da tắc mật",
      "C": "Suy tuyền giáp",
      "D": "Cường giáp"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 284,
    "cluster": "201-296",
    "topic": "Định lượng Acid Uric",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Độ bền màu của phản ứng acid uric là",
    "options": {
      "A": "5 phút",
      "B": "10 phút",
      "C": "15 phút",
      "D": "20 phút"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 285,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Phương pháp định lượng amylase huyết thanh",
    "options": {
      "A": "Đo điểm cuối",
      "B": "Động học đa điểm",
      "C": "Động học",
      "D": "Pha loãng huyết thanh"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 286,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Đơn vị Wohlgemuth là gì?",
    "options": {
      "A": "Là lượng amylase tối thiểu có khả năng thủy phân hết 1ml dd hồ tinh bột 10/00 ở 370C trong 30p",
      "B": "Là lượng amylase tối đa có khả năng thủy phân hết 1ml dd hồ tinh bột 10/00 ở 370C trong 30p",
      "C": "Là lượng amylase tối thiểu có khả năng thủy phân hết 1ml dd hồ tinh bột 10/0 ở 370C trong 30p",
      "D": "Là lượng amylase tối đa có khả năng thủy phân hết 1ml dd hồ tinh bột 10/0 ở 370C trong 30p"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 287,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#DoTuyenTinh",
      "#HuyetThanh"
    ],
    "question": "Độ tuyến tính của phương pháp định lượng amylase huyết thanh",
    "options": {
      "A": "10.8-1500 U/L",
      "B": "100.8 – 1500 U/L",
      "C": "20.8- 1600 U/L",
      "D": "18.8 – 1500 U/L"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 288,
    "cluster": "201-296",
    "topic": "Enzyme Amylase & CK-MB",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Định lượng amylase trong trường hợp nào sau đây không có giá trị chẩn đoán:",
    "options": {
      "A": "Suy gan",
      "B": "Viêm tụy cấp",
      "C": "Suy thận",
      "D": "Suy tim"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 289,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Độ ổn định huyết tương/ huyết thanh ở 20-250C là",
    "options": {
      "A": "2 ngày",
      "B": "5 ngày",
      "C": "7 ngày",
      "D": "12 tuần"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 290,
    "cluster": "201-296",
    "topic": "Xét nghiệm Nước tiểu & Cặn lắng",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#NuocTieu"
    ],
    "question": "Phản ứng tìm ceton trong nước tiểu:",
    "options": {
      "A": "Ceton + Na nitroprussiat ---OH---> phức chất màu tím",
      "B": "Ceton + Na nitroprussiat ---H---> phức chất màu tím",
      "C": "Ceton + Na nitroprussiat ---OH---> phức chất màu hồng",
      "D": "Ceton + Na nitroprussiat ---H---> phức chất màu hồng"
    },
    "answer": [
      "A"
    ],
    "note": ""
  },
  {
    "id": 291,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "QUINONEMINE bền màu trong?",
    "options": {
      "A": "15 phút",
      "B": "30 phút",
      "C": "60 phút",
      "D": "2 giờ"
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 292,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Để loại protein khỏi huyết tương ta làm ?",
    "options": {
      "A": "Ly tâm 300 vòng/ phút trong 10 phút.",
      "B": "Ly tâm 3000 vòng/ phút trong 1 phút.",
      "C": "Ly tâm 3000 vòng/ phút trong 10 phút.",
      "D": "Ly tâm 30000 vòng/ phút trong 1 phút."
    },
    "answer": [
      "C"
    ],
    "note": ""
  },
  {
    "id": 293,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Tăng protein gặp trong (còn lại là giảm)",
    "options": {
      "A": "Xơ gan, viêm gan",
      "B": "Bệnh Addison",
      "C": "Hội chứng thận hư",
      "D": "Mất máu"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 294,
    "cluster": "201-296",
    "topic": "Định lượng Lipid máu",
    "type": "special",
    "subType": "Chỉ có 3 lựa chọn",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "LDL tăng có tác dụng?",
    "options": {
      "A": "Giảm nguy cơ sơ vữa động mạch và bệnh mạch vành",
      "B": "Tăng nguy cơ sơ vữa động mạch và bệnh mạch vành",
      "C": "Chưa thấy mối liên hệ"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 295,
    "cluster": "201-296",
    "topic": "Định lượng Protein & Rivalta",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HuyetThanh"
    ],
    "question": "Công thức tính nồng độ protein toàn phần trong huyết thanh",
    "options": {
      "A": "C(g/l) = OD/ODo x 6,25x 10",
      "B": "C(g/l) = OD/ODo x 7,25x 10",
      "C": "C(g/l) = OD/ODo x 8,25x 10",
      "D": "C(g/l) = OD/ODo x 6,25"
    },
    "answer": [
      "B"
    ],
    "note": ""
  },
  {
    "id": 296,
    "cluster": "201-296",
    "topic": "Thực hành Hóa sinh tổng hợp",
    "type": "standard",
    "subType": "Chuẩn 4 đáp án",
    "tags": [
      "#HoaSinhCTUMP"
    ],
    "question": "Các bước sóng phù hợp:",
    "options": {
      "A": "Protein toàn phần 530 nm",
      "B": "Ure 340 nm",
      "C": "Acid Uric 505nm",
      "D": "Creatinin 505 nm"
    },
    "answer": [
      "B"
    ],
    "note": ""
  }
];

let QUESTIONS = [...DEFAULT_QUESTIONS];

let state = {
  keywordOn: true,
  revealAll: false,
  onlyWrong: false,
  page: 1,
  userAnswers: JSON.parse(localStorage.getItem("hs_ctump_296_answers") || "{}")
};

const KEYWORDS = [
  "NGOẠI TRỪ",
  "KHÔNG",
  "bình thường",
  "tăng",
  "giảm",
  "nguyên tắc",
  "độ tuyến tính",
  "dương tính",
  "âm tính",
  "tối đa",
  "tối thiểu",
  "tiên phát",
  "nguyên phát"
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightText(text) {
  const safe = escapeHtml(text);
  if (!state.keywordOn) return safe;
  let out = safe;
  KEYWORDS.forEach(kw => {
    const reg = new RegExp(`(${kw})`, "gi");
    out = out.replace(reg, '<span class="kw-hl">$1</span>');
  });
  return out;
}

function saveState() {
  localStorage.setItem("hs_ctump_296_answers", JSON.stringify(state.userAnswers));
}

function updateHeaderBadges() {
  const topics = [...new Set(QUESTIONS.map(q => q.topic))];
  const stdCount = QUESTIONS.filter(q => q.type === "standard").length;
  const spcCount = QUESTIONS.filter(q => q.type !== "standard").length;

  document.getElementById("badgeTotal").textContent = `Tổng: ${QUESTIONS.length} câu`;
  document.getElementById("badgeTopics").textContent = `${topics.length} Chuyên đề`;
  document.getElementById("badgeStandard").textContent = `${stdCount} câu 4 đáp án chuẩn`;
  document.getElementById("badgeSpecial").textContent = `${spcCount} câu đặc biệt / nhiều ĐA`;

  const typeSel = document.getElementById("typeFilter");
  typeSel.options[0].text = `Tất cả loại câu (${QUESTIONS.length})`;
  typeSel.options[1].text = `Chuẩn 4 đáp án ABCD (${stdCount})`;
  typeSel.options[2].text = `Ngoài tiêu chí / Nhiều ĐA (${spcCount})`;
}

function populateTopics() {
  const sel = document.getElementById("topicFilter");
  const topics = [...new Set(QUESTIONS.map(q => q.topic))];
  sel.innerHTML =
    '<option value="all">Tất cả chuyên đề</option>' +
    topics.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
}

function getFiltered() {
  const qStr = document.getElementById("searchInput").value.trim().toLowerCase();
  const cluster = document.getElementById("clusterFilter").value;
  const topic = document.getElementById("topicFilter").value;
  const type = document.getElementById("typeFilter").value;

  return QUESTIONS.filter(item => {
    if (cluster !== "all" && item.cluster !== cluster) return false;
    if (topic !== "all" && item.topic !== topic) return false;
    if (type !== "all" && item.type !== type) return false;

    if (state.onlyWrong) {
      const picked = state.userAnswers[item.id];
      if (!picked || !picked.length) return false;
      const isCorrect =
        picked.length === item.answer.length &&
        picked.every(k => item.answer.includes(k));
      if (isCorrect) return false;
    }

    if (qStr) {
      const inId = String(item.id) === qStr || `câu ${item.id}`.includes(qStr);
      const inQ = item.question.toLowerCase().includes(qStr);
      const inOpts = Object.values(item.options).some(v => v.toLowerCase().includes(qStr));
      const inTopic = item.topic.toLowerCase().includes(qStr);
      const inTags = (item.tags || []).some(t => t.toLowerCase().includes(qStr));
      return inId || inQ || inOpts || inTopic || inTags;
    }
    return true;
  });
}

function render() {
  const filtered = getFiltered();
  const pageSize = parseInt(document.getElementById("pageSize").value, 10);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (state.page > totalPages) state.page = 1;

  const start = (state.page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  document.getElementById("statDisplay").textContent =
    `Hiển thị: ${pageItems.length} (Tổng lọc: ${filtered.length} / ${QUESTIONS.length} câu)`;

  let doneCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  QUESTIONS.forEach(q => {
    const u = state.userAnswers[q.id];
    if (u && u.length > 0) {
      doneCount++;
      const ok = u.length === q.answer.length && u.every(k => q.answer.includes(k));
      if (ok) correctCount++;
      else wrongCount++;
    }
  });

  document.getElementById("statProgress").textContent =
    `Đã làm: ${doneCount}/${QUESTIONS.length} | Đúng: ${correctCount}`;
  document.getElementById("statWrong").textContent =
    `Câu sai: ${wrongCount}${state.onlyWrong ? " (Đang lọc)" : ""}`;

  const listEl = document.getElementById("questionList");
  listEl.innerHTML = pageItems
    .map(q => {
      const pickedArr = state.userAnswers[q.id] || [];
      const isMulti = q.answer.length > 1;
      const hasAnswered = isMulti
        ? pickedArr.length >= q.answer.length
        : pickedArr.length > 0;
      const showAns = state.revealAll || hasAnswered || Object.keys(q.options).length === 0;

      const optsHtml = Object.entries(q.options)
        .map(([key, val]) => {
          let cls = "opt";
          const isPicked = pickedArr.includes(key);
          if (showAns) {
            if (q.answer.includes(key)) cls += " correct";
            else if (isPicked) cls += " wrong";
          } else if (isPicked) {
            cls += " correct";
          }
          return `
            <div class="${cls}" onclick="pickAnswer(${q.id}, '${key}')">
              <span class="opt-key">${key}.</span>
              <span>${highlightText(val)}</span>
            </div>
          `;
        })
        .join("");

      const ansTexts = q.answer
        .map(k => (q.options[k] ? `${k}. ${escapeHtml(q.options[k])}` : escapeHtml(k)))
        .join(" | ");
      const extraNote = q.note ? `<div style="margin-top:4px;font-weight:500;">${escapeHtml(q.note)}</div>` : "";

      return `
        <div class="q-card">
          <div class="q-meta">
            <span class="tag tag-id">Câu ${q.id}</span>
            <span class="tag tag-cluster">Cụm ${q.cluster}</span>
            <span class="tag tag-topic">${escapeHtml(q.topic)}</span>
            <span class="tag tag-level ${q.type === "special" ? "special" : ""}">${escapeHtml(q.subType || "Chuẩn 4 đáp án")}</span>
            ${(q.tags || []).map(t => `<span class="tag tag-hash">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="q-title">${q.id}. ${highlightText(q.question)}</div>
          <div class="options">${optsHtml}</div>
          <div class="ans-box ${showAns ? "show" : ""}">
            Đáp án đúng: ${ansTexts}
            ${extraNote}
          </div>
        </div>
      `;
    })
    .join("");

  const pagEl = document.getElementById("pagination");
  if (totalPages <= 1) {
    pagEl.innerHTML = "";
  } else {
    let btns = "";
    for (let p = 1; p <= totalPages; p++) {
      btns += `<button class="btn ${p === state.page ? "btn-reveal" : ""}" onclick="goPage(${p})">Trang ${p}</button>`;
    }
    pagEl.innerHTML = btns;
  }
}

window.pickAnswer = function (id, key) {
  const q = QUESTIONS.find(item => item.id === id);
  if (!q) return;

  if (q.answer.length > 1) {
    const cur = state.userAnswers[id] || [];
    if (cur.includes(key)) {
      state.userAnswers[id] = cur.filter(k => k !== key);
    } else {
      state.userAnswers[id] = [...cur, key];
    }
  } else {
    state.userAnswers[id] = [key];
  }
  saveState();
  render();
};

window.goPage = function (p) {
  state.page = p;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("searchInput").addEventListener("input", () => {
  state.page = 1;
  render();
});
document.getElementById("clusterFilter").addEventListener("change", () => {
  state.page = 1;
  render();
});
document.getElementById("topicFilter").addEventListener("change", () => {
  state.page = 1;
  render();
});
document.getElementById("typeFilter").addEventListener("change", () => {
  state.page = 1;
  render();
});
document.getElementById("pageSize").addEventListener("change", () => {
  state.page = 1;
  render();
});

document.getElementById("btnKeyword").addEventListener("click", function () {
  state.keywordOn = !state.keywordOn;
  this.textContent = `★ Keyword: ${state.keywordOn ? "BẬT" : "TẮT"}`;
  this.classList.toggle("active", state.keywordOn);
  render();
});

document.getElementById("btnReveal").addEventListener("click", function () {
  state.revealAll = !state.revealAll;
  this.textContent = state.revealAll ? "Ẩn đáp án" : "Hiện tất cả đáp án";
  this.classList.toggle("active", state.revealAll);
  render();
});

document.getElementById("btnReset").addEventListener("click", () => {
  if (confirm("Xóa toàn bộ tiến độ đã làm để làm lại từ đầu?")) {
    state.userAnswers = {};
    state.onlyWrong = false;
    saveState();
    render();
  }
});

document.getElementById("statWrong").addEventListener("click", () => {
  state.onlyWrong = !state.onlyWrong;
  state.page = 1;
  render();
});

document.getElementById("btnExportJson").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(QUESTIONS, null, 2)], {
    type: "application/json"
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ngan_hang_hoa_sinh_ctump_296.json";
  a.click();
});

document.getElementById("btnRestoreDefault").addEventListener("click", () => {
  QUESTIONS = [...DEFAULT_QUESTIONS];
  document.getElementById("bankTitle").textContent =
    "NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM THỰC HÀNH HÓA SINH (CÂU 1 – 296)";
  state.page = 1;
  updateHeaderBadges();
  populateTopics();
  render();
});

document.getElementById("fileImport").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    const text = ev.target.result;
    try {
      if (file.name.endsWith(".json")) {
        const parsed = JSON.parse(text);
        QUESTIONS = Array.isArray(parsed) ? parsed : parsed.questions || [];
      } else {
        const titleM = text.match(/^TITLE:\s*(.*)/m);
        if (titleM) {
          document.getElementById("bankTitle").textContent = titleM[1].trim();
        }
        const blocks = text.split(/\n---\n/).filter(b => b.includes("Q:"));
        QUESTIONS = blocks.map((b, idx) => {
          const idMatch = b.match(/Q:\s*Câu\s*(\d+)\.\s*(.*)/i);
          const qText = idMatch
            ? idMatch[2].trim()
            : (b.match(/Q:\s*(.*)/) || ["", ""])[1].trim();
          const num = idMatch ? parseInt(idMatch[1], 10) : idx + 1;
          const opts = {};
          ["A", "B", "C", "D", "E", "F", "G", "H", "L"].forEach(k => {
            const m = b.match(new RegExp(`^${k}:\\s*(.*)`, "m"));
            if (m) opts[k] = m[1].trim();
          });
          const ansM = b.match(/^ANS:\s*(.*)/m);
          const ansArr = ansM ? ansM[1].split(",").map(s => s.trim()) : [];
          const cluster =
            num <= 100 ? "1-100" : num <= 200 ? "101-200" : "201-296";
          return {
            id: num,
            cluster,
            topic: "Đề thi tải lên",
            type:
              Object.keys(opts).length === 4 && ansArr.length === 1
                ? "standard"
                : "special",
            subType:
              Object.keys(opts).length === 4 && ansArr.length === 1
                ? "Chuẩn 4 đáp án"
                : "Đặc biệt / Nhiều ĐA",
            tags: ["#CustomExam"],
            question: qText,
            options: opts,
            answer: ansArr,
            note: ""
          };
        });
      }
      state.page = 1;
      updateHeaderBadges();
      populateTopics();
      render();
      alert(`Đã nạp thành công ${QUESTIONS.length} câu hỏi!`);
    } catch (err) {
      alert("Lỗi đọc file: " + err.message);
    }
  };
  reader.readAsText(file);
});

updateHeaderBadges();
populateTopics();
render();
