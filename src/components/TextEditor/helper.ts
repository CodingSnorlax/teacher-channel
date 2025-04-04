export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }], // 加入這一行
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"], // 清除格式
  ],
};

export const formats = [
    'header', 'bold', 'italic', 'underline',
    'color', 'background', // 記得 formats 中也要加
    'list', 'bullet',
    'link', 'image'
  ];