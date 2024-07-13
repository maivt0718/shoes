$.getUserInfo = async (secret) => {
  try {
    let result = await instance.get("Users/getProfile", {
      headers: {
        Authorization: `Bearer ${secret}`,
      },
    });
  } catch (error) {
    console.error(err);
  }
};

$.register = async (user) => {
  try {
    let result = await instance.post("Users/signup", { ...user });
    temp = {
      data: {
        statusCode: 200,
        message: "Đăng ký tài khoản thành công!",
        content: {
          email: "wijukyxaz@mailinator.com",
          password: "Pa$$w0rd!",
          name: "Madaline Larson",
          gender: false,
          phone: "0813981597",
        },
        dateTime: "2024-07-13T10:54:55.0019475+07:00",
      },
      status: 200,
      statusText: "OK",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [null],
        transformResponse: [null],
        timeout: 30000,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        baseURL: "https://shop.cyberlearn.vn/api/",
        method: "post",
        url: "Users/signup",
        data: '{"name":"Madaline Larson","password":"Pa$$w0rd!","email":"wijukyxaz@mailinator.com","bod":"","gender":false,"phone":"0813981597","datepicker":"03/07/2024"}',
      },
      request: {},
    };
    if (result.data.statusCode == 200) {
      Toastify({
        text: `${result.data.message}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    }
  } catch (error) {
    console.log(error);
  }
};

$.getValueFromForm = () => {
  let consumer = new Customer();
  let isValue = true;

  let arrFields = $(".form_content input, .form_content select");
  for (const element of arrFields) {
    let { id, value } = element;
    let span = $(`#${id}`).parent().parent()[0].lastElementChild.id;

    if (id == "name") {
      isValue &= $.checkName(span, value);
    }
    if (id == "password") {
      isValue &= $.checkPassword(span, value);
    }
    if (id == "email") {
      isValue &= $.checkEmail(span, value);
    }
    if (id == "gender") {
      value = $(`#${id} option:selected`).text();
      consumer.setGender(value);
      isValue &= $.checkGender(span, value);
    }
    if (id == "phone") {
      isValue &= $.checkPhone(span, value);
    }
    if (id == "datepicker") {
      isValue &= $.checkDate(span, value);
    }
    if (id != "gender") {
      consumer[id] = value;
    }
  }
  if (isValue) {
    $("#form").trigger("reset");
    $("#myModal").modal("hide");
    return consumer;
  }
  return;
};

$(".btn-save-footer").click(function (e) {
  e.preventDefault();
  consumer = $.getValueFromForm();
  if (consumer) {
    $.register(consumer);
  }
});
