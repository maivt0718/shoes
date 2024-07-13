$.getUserInfo = async (secret) => {
  try {
    console.log(secret)
    let result = await instance.post("Users/getProfile", {}, {
      headers: {
        "Authorization": `Bearer ${secret}`
      },
    });
    if (result.data.statusCode == 200) {
      $.toastify(
        result.data.message,
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

$.toastify = (message, color) => {
  Toastify({
    text: `${message}`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: `${color}`,
    },
  }).showToast();
};

$.login = async (user) => {
  try {
    let result = await instance.post("Users/signin", { ...user });
    if (result.data.statusCode == 200) {
      $.getUserInfo(result.data.content.accessToken);
    }
  } catch (error) {
    $.toastify(
      result.data.message,
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
    );
    console.log(error);
    throw error;
  }
};

$.register = async (user) => {
  try {
    let result = await instance.post("Users/signup", { ...user });
    if (result.data.statusCode == 200) {
      $.toastify(
        result.data.message,
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    }
  } catch (error) {
    $.toastify(
      result.data.message,
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
    );
    console.log(error);
    throw error;
  }
};

$.getValueFromForm = () => {
  let consumer = new Customer();
  let isValue = true;

  let arrFields = $("#form input,#form select");
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
    if (id != "gender" && isValue) {
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

$.getValueFromLoginFormAndLogin = () => {
  let consumer = new Customer();
  let isValue = true;
  let arrFields = $("#login_form input");
  for (const element of arrFields) {
    let { id, value } = element;
    let span = $(`#${id}`).parent().parent()[0].lastElementChild.id;
    if (id == "login_password") {
      consumer["password"] = value;
    }
    if (id == "login_email") {
      isValue &= $.checkEmail(span, value);
      consumer["email"] = value;
    }
  }
  if (isValue) {
    $.login({ ...consumer });
    $("#login_form").trigger("reset");
    $("#myLoginModal").modal("hide");
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

$(".btn-login-footer").click(function (e) {
  e.preventDefault();
  consumer = $.getValueFromLoginFormAndLogin();
});
