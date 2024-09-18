import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate("/");
            })
            .catch((error) => {
                console.log("error--", error);
            });
    };

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black">
            <div className="flex justify-between items-center">
                <img
                    className="h-20"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="Netflix Logo"
                />

                <div className="flex p-2">
                    <img
                        className="h-16 p-2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAAlJSXFxcX5+fn29vbx8fHq6urc3Nz8/Pzj4+N9fX3Y2Ni2trYTExPT09NycnLNzc1YWFhCQkKWlpY4ODhISEgdHR2hoaGpqaldXV2GhoZjY2MYGBhNTU2NjY0wMDDgAfyaAAAHw0lEQVR4nO1d27qqOAzecj6IgIDKQeD9n3KWs0xa1K3YFMLM1/9qXWhN2pyaJll//hgYGBgYGBgYGBgYGBgYGBjQETqud4frhNzUEOD6wT4p26awrLNVNG2Z7APf5aZKBd7eLrvdE7rS3nvctH2JIGmLZ05+UbRJwE3ffIR52fyNk180Zf4f0Z+0Pb1n5YZTm3LTOQPeUH1m5YZq2Lzu2NVhHi+73aGyual9jxf26x06bnrfIHja/PPYt4mdp2luJ20/np+Obat2LUymdFqnLImmH4mS7GRNP5Vs0qy5l6tMZJEl/quP+Uk28UDXywZjAq+UeSmGN5Y3HWR2ruXmrJo3SLyMbf7+03k7StxszUa78rl09kfJce1OPptNSVpYn4UFG17qyiP8QVi2c70lK5CLc7FqZ953nFrYtesHsVwTrmSPvyArl6z0dgRNRGNW9PnTApHgplqKtm9xEcI/S10EfKFql2Vo+xaROJevg5NAnM1XZ7oUQjSyV4Uo2EbT0W3BoiW4uRcFckKUUSvRT9u3cPFgMiVH7mV4NPwWDQ+mULwHp8VmjkZsrIqQ3SAETe1oNcIGH9MpW6MIBJX9Gl3Cttbqa9SwRqmPLhUERziYL92lDB+O5sh7iU7uoe+B5MAvsAqrCXBAyk6kPQ0ga1jOjLgXAepuRlsHTKK6FdGA9B6MnAnqfwPc7a6cOVsbjCpRcwMw8IzG2QF/11NX6sHz8imNF+tRGaE0MV8QEMGGElVG+M2ezwJAbvlA1tsUUjV8bhOYuZL3M7puhpkzWW2dMzszKTBDXwqY4XM0uX5m+LKBtn5m+Lzm/+pk9vqZ2dOXUgSaZrLf9rZjmg9kEgJ+pwmJ7wNZbe07M98l3rXChxIZciYCbqwNIZVAhNfeaSAXJ8CNteWLmkMIdk/EzKoLSQDO90DwmiPRPeTw+MyZBtzfr7sHotKUd/2v+NzMjwXAtApJzvAlIePT/z/ihkhLE2PCmnxjJcEGYW8pq4BRHHkz5yhnPeEikvabkDLppXlQX2OANbhfnHFXC2XrnBcaTlcLQpB3ZeftiRXY35tzsESq7xHwKrKr+AtoQshqKibwMJG4i9kP5icKwDq4TCHj5OAD78jp/RFojFQsGunLCyAUJYpf21ZRQzRuQMhu2CNFuy+NgFQ8vAkhu0HIynfRVS2+tw0h+xdSh0k5W1zCUnyrWZK6L+FLnRnxzADLj8V3KuagbIpU4uZozzDRjn2UeOGOY6YIbamI3Co/Zr+CUio2LeyNWDJAmMg9QMf6bTQQ1dKx7Krt9TY4E2523eWv7ESXSZdNlXCWZfwFYT7h5tDHr9o0/CTuJ0001UZb6aKHxjmr6C65xJCfX7rioX3mtImi2ZeId484XK2iyeI4awrr+tyOFnNT/A72E7lvwV369wFubH3m4S6FMX+57Fs4fpp9ZuMXWepv0I4hfjS8md2m+aNPzcQ+bAlOWmezRQxFLavT7R2PYw/9Z9pfoR/mxHJrIslmdjS/QpWx15pLSI7j30kd+y77Qde/+8xxK+wEx/NLCk9DYke32Rl3
                /PwZ2cnwur/+zFzT/Avv2ev/6HX3bhhDkHSvLAVjFeAv3OSRrIPVX2ZscnDprUcrbiWsXnT/6CHH5vPFDBCUzaMaZXw5Gjd5MGF9/N2dMbTjB3tecR1OMEwJaUqFfd0/zg4ZWAyBPaWiqRWpCOqHhRhC6XoiYoUqKzdE9WRCQLX2M61bTnxLGZHuvk5Uyqud1+1C9yfO5bSnV8/uJ750biJRB/yJRdYzN8K9yGuu9+4cyRpLawOSEciH06yU6IikDN5BZ02V10oxwXEVbmReRs2Gpx7X5caXZKzX7hJsKSJYvirQk3S/WyB5n0qp26U7at1W/Fa8iBxEktVvl/U3knNbyhfIPmzRllppIstyfk3ihtpl+A55sQIvE27Uy4s+IRLKuayHliKMpdpQJeVfutNV2raFjICoQOgXv93uhb9ZJAklQqc1hhBgDarG4E/ARa28rnJ5qnGGywIvH+IZaZ1nFbF5+p+kPLTKp5WuGj6KdaE7rBGZmNWqKVL8Sc1VQmIe04pDO0TspNcToBc7r/hqH2LwRO5qlyFOfNUUnRgyqlO20SG3qz5yORhzaJzrakOq/7xyPUUEgmbpM89iHtPKr4+OmOOka0mcc7X+HAUs4Vad0fUE9DHrt7dhi54uX4O5peWD5Wdg+Kwp8ySGXDFUhoU6xnQJ4AvsclfYd8Crupb3W7EaSyGFo3UvQcq4Rvbhe7YGOcPkwpGpAMkH+6MhiZLCxpCaFymAmMaiuxpIY/D1UGIvKFnOsb3txFZH5cCVk/wWFKEt00KYEtCeUf0mTGOhT5ZQB8ykoM5xwX9csOYN84kIuAgQmwYw4UOeLUcBxGfEJJeHQyE10aUEHHBJswA+iCtrbTgkIA80t4mZDNYCVweooLlNzPxrIksRQAXNbcIlk7lbD57raddNHG6jiSpF6BnWo222JA04mZKyiAMhM3PvIdghi2KHPNA85mYqzNtTHI2vYxENwE2lOBpkJrFZkehgRjzLbAQUcd9/Xn5dUNKQ6efl1wXFqv6vmHn6/3jcoDzcuYTmqyVQkW5n+ecfWBPEJEAQj9ZGMMZb6OQyMDAwMDAwMDAwMDAwMDDgxz9kElc/5Tjc6gAAAABJRU5ErkJggg=="
                        alt="Profile"
                    />
                    <button
                        onClick={handleSignOut}
                        className="text-white font-bold"
                    >
                        (Sign Out)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
