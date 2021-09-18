ANALYSIS SEARCH FUNCTION: ( phân tích chức năng tìm kiêm):
+ Trước khi nhập thông tin để search:
    1/ Khi vừa vào ko cần tìm kiếm (trước khi nhập chuỗi để search) => input = ""
    2/ Lúc này khi type nội dung -> có sự thay đổi về trạng thái
    => cần thiết lập state cho chức năng này
+ Khi nhập thông tin và click go!: khi nhập và click go => thay đổi strSearch 
    1/ cần 1 function xuất ra được giá trị trong ô input khi click go btn.
    2/ sau khi xuất được input -> cần phải trả về App component để xuất thông tin search:
     - lý do vì: App component là nơi chứa listtask compent (danh sách task) và tools component( search thuộc tool)
    3/ Tạo thêm att cho tools (vì tools chứa search) để có thể liên kết giữa search và listtask thông qua tool + App:
    có thể dùng cú pháp tại constructor: console.log(this.props.{tên att} để check)
+ Khi app đã nhận được thông tin search => dùng các menthod js để search:
bài toán: tìm name trong listtask có chứa đoạn input được user nhập vào => javascript
hoặc có thể dùng lodash để search https://www.npmjs.com/package/lodash
