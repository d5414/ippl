var db_users = [
    { user_id: "USR-001", username: "claudiazahra",  nama_display: "Claudia Zahra",  email: "reader@aksara.id", password: "pass123", role: "pembaca", status_verifikasi: "Belum Terverifikasi", tanggal_bergabung: "2025-01-15" },
    { user_id: "USR-002", username: "tereliye",      nama_display: "Tere Liye",      email: "tere@aksara.id",   password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2013-01-01" },
    { user_id: "USR-003", username: "deelestari",    nama_display: "Dee Lestari",    email: "dee@aksara.id",    password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2001-01-01" },
    { user_id: "USR-004", username: "dwiputra",      nama_display: "Dwi Putra",      email: "dwi@aksara.id",    password: "pass123", role: "pembaca", status_verifikasi: "Belum Terverifikasi", tanggal_bergabung: "2025-03-10" },
    { user_id: "USR-005", username: "pidibaiq",      nama_display: "Pidi Baiq",      email: "pidi@aksara.id",   password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2014-01-01" },
    { user_id: "USR-006", username: "andreahibrata", nama_display: "Andrea Hirata",  email: "andrea@aksara.id", password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2005-01-01" }
];

var pola = {
    nama: /^(?=.{2,50}$)[\p{L}\p{M}\p{N}]+(?:(?:[.'’-] ?| )[\p{L}\p{M}\p{N}]+)*\.?$/u,
    username: /^(?=.*[A-Za-z])[A-Za-z0-9]{3,30}$/,
    email: /^(?=.{1,100}$)[a-z0-9_%+-]+(?:\.[a-z0-9_%+-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i,
    password: /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\p{N}\p{P}\p{S}])\S{8,64}$/u
};

var aturan_password = {
    length: function (v) { return v.length >= 8 && v.length <= 64; },
    upper:  function (v) { return /\p{Lu}/u.test(v); },
    lower:  function (v) { return /\p{Ll}/u.test(v); },
    special: function (v) { return /[\p{N}\p{P}\p{S}]/u.test(v); }
};

function val(id) {
    return document.getElementById(id).value;
}

function getName() {
    return val("reg_display_name").replace(/\s+/g, " ").trim();
}

function getUsername() {
    return val("reg_username").trim();
}

function getEmail() {
    return val("reg_email").trim().toLowerCase();
}

function todayLocal() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
}

var field_ids = ["reg_display_name", "reg_username", "reg_email", "reg_password", "reg_password2"];

var err_ids = {
    reg_display_name: "reg_name_err",
    reg_username:     "reg_username_err",
    reg_email:        "reg_email_err",
    reg_password:     "reg_pass_err",
    reg_password2:    "reg_pass2_err"
};

var validators = {
    reg_display_name: function () { return pola.nama.test(getName()); },
    reg_username:     function () { return pola.username.test(getUsername()); },
    reg_email:        function () { return pola.email.test(getEmail()); },
    reg_password:     function () { return pola.password.test(val("reg_password")); },
    reg_password2:    function () {
        var p2 = val("reg_password2");
        return p2.length > 0 && p2 === val("reg_password");
    }
};

var touched = {};

function validateField(id) {
    var ok = validators[id]();
    var input = document.getElementById(id);
    input.classList.toggle("invalid", !ok);
    input.classList.toggle("valid", ok);
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    if (id === "reg_password") {
        if (!ok && /\s/.test(val("reg_password"))) { showEl(err_ids[id]); } else { hideEl(err_ids[id]); }
        updatePasswordChecklist();
    } else if (ok) {
        hideEl(err_ids[id]);
    } else {
        showEl(err_ids[id]);
    }
    return ok;
}

function clearFieldState(id) {
    var input = document.getElementById(id);
    input.classList.remove("invalid", "valid");
    input.removeAttribute("aria-invalid");
    hideEl(err_ids[id]);
}

function updatePasswordChecklist() {
    var v = val("reg_password");
    document.querySelectorAll(".pass-rules li").forEach(function (li) {
        var met = aturan_password[li.getAttribute("data-rule")](v);
        li.classList.toggle("ok", met);
        li.classList.toggle("bad", !met && (v.length > 0 || !!touched.reg_password));
    });
}

function bindLiveValidation() {
    field_ids.forEach(function (id) {
        var input = document.getElementById(id);

        input.addEventListener("blur", function () {
            if (id === "reg_display_name") {
                input.value = getName();
            }
            if (input.value.length === 0 && !touched[id]) { return; }
            touched[id] = true;
            validateField(id);
        });

        input.addEventListener("input", function () {
            if (id === "reg_password") {
                updatePasswordChecklist();
                if (touched.reg_password2) { validateField("reg_password2"); }
            }
            if (touched[id]) { validateField(id); }
        });
    });

    document.querySelectorAll(".toggle-pass").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var target = document.getElementById(btn.getAttribute("data-target"));
            var show = target.type === "password";
            target.type = show ? "text" : "password";
            btn.setAttribute("aria-pressed", show ? "true" : "false");
            btn.setAttribute("aria-label", (show ? "Hide " : "Show ") +
                (btn.getAttribute("data-target") === "reg_password" ? "password" : "confirmation password"));
        });
    });

    document.getElementById("reg_form").addEventListener("input", function () {
        var alert_el = document.getElementById("reg_alert");
        if (alert_el.classList.contains("alert-success")) { hideEl("reg_alert"); }
    });
}

function doRegister(e) {
    if (e) { e.preventDefault(); }

    var alert_el = document.getElementById("reg_alert");
    hideEl("reg_alert");
    alert_el.className = "alert alert-error";

    var first_invalid = null;
    field_ids.forEach(function (id) {
        touched[id] = true;
        if (!validateField(id) && !first_invalid) { first_invalid = id; }
    });
    if (first_invalid) {
        document.getElementById(first_invalid).focus();
        return;
    }

    var display_name = getName();
    var username_val = getUsername();
    var email_val    = getEmail();
    var pass_val     = val("reg_password");

    var email_taken = false;
    var username_taken = false;
    db_users.forEach(function (u) {
        if (u.email.toLowerCase() === email_val) { email_taken = true; }
        if (u.username.toLowerCase() === username_val.toLowerCase()) { username_taken = true; }
    });

    if (email_taken) {
        showElMsg("reg_alert", "This email is already registered. Try another email.");
        document.getElementById("reg_email").focus();
        return;
    }
    if (username_taken) {
        showElMsg("reg_alert", "This username is already taken. Try another one.");
        document.getElementById("reg_username").focus();
        return;
    }

    var new_id = "USR-" + String(db_users.length + 1).padStart(3, "0");
    db_users.push({
        user_id: new_id,
        username: username_val,
        nama_display: display_name,
        email: email_val,
        password: pass_val,
        role: "pembaca",
        status_verifikasi: "Belum Terverifikasi",
        tanggal_bergabung: todayLocal()
    });

    resetForm();
    alert_el.className = "alert alert-success";
    showElMsg("reg_alert", "Registration successful (simulation). Account " + new_id +
        " was created for this session only. You can now log in.");
    alert_el.focus();
    if (alert_el.scrollIntoView) { alert_el.scrollIntoView({ block: "nearest" }); }
}

function resetForm() {
    document.getElementById("reg_form").reset();
    touched = {};
    field_ids.forEach(clearFieldState);
    updatePasswordChecklist();
    document.querySelectorAll(".toggle-pass").forEach(function (btn) {
        var target = document.getElementById(btn.getAttribute("data-target"));
        target.type = "password";
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", target.id === "reg_password" ? "Show password" : "Show confirmation password");
    });
}

function showEl(el_id) {
    var el = document.getElementById(el_id);
    if (el) { el.classList.add("show"); }
}

function hideEl(el_id) {
    var el = document.getElementById(el_id);
    if (el) { el.classList.remove("show"); }
}

function showElMsg(el_id, msg) {
    var el = document.getElementById(el_id);
    if (el) {
        el.textContent = msg;
        el.classList.add("show");
    }
}

document.getElementById("reg_form").addEventListener("submit", doRegister);
bindLiveValidation();
updatePasswordChecklist();

document.addEventListener("click", function (e) {
    if (e.target.closest(".deco")) { e.preventDefault(); }
});