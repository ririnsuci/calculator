<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Persen</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #9bc5d3;
        }
        
        .container {
            max-width: 400px;
            margin: auto;
            padding: 25px;
            background: rgb(250, 250, 250);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        h2 {
            color: #333;
        }
        
        input,
        select,
        button {
            width: calc(100% - 4px);
            padding: 14px;
            margin: 10px 0;
            border: 2px solid #c4bebe;
            border-radius: 8px;
            font-size: 18px;
            box-sizing: border-box;
        }
        
        button {
            background: linear-gradient(45deg, #56af6b, #218838);
            color: rgb(255, 255, 255);
            border: none;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;
        }
        
        button:hover {
            background: linear-gradient(45deg, #218838, #1e7e34);
        }
        
        #hasil {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
            color: #555;
            background: #e8f5e9;
            padding: 12px;
            border-radius: 8px;
            display: inline-block;
            width: calc(100% - 4px);
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Kalkulator Persen</h2>
        <select id="mode">
            <option value="hitungPersenDariY">Hitung X% dari Y</option>
            <option value="hitungXPersenDariY">Hitung X sebagai persen dari Y</option>
            <option value="hitungNilaiDariPersen">Hitung nilai dari persen X terhadap Y</option>
        </select>
        <input type="number" id="nilai" placeholder="Masukkan nilai X">
        <input type="number" id="persen" placeholder="Masukkan nilai Y">
        <button onclick="hitung()" id="hitungButton">Hitung</button>
        <div id="hasil"></div>
    </div>

    <script>
        function hitung() {
            let mode = document.getElementById('mode').value;
            let x = parseFloat(document.getElementById('nilai').value);
            let y = parseFloat(document.getElementById('persen').value);
            let hasil = "";

            if (!isNaN(x) && !isNaN(y) && y !== 0) {
                if (mode === "hitungPersenDariY") {
                    hasil = `${x}% dari ${y} adalah ${(x * y) / 100}`;
                } else if (mode === "hitungXPersenDariY") {
                    hasil = `${x} adalah ${(x / y) * 100}% dari ${y}`;
                } else if (mode === "hitungNilaiDariPersen") {
                    hasil = `Nilai dari ${x}% terhadap ${y} adalah ${(y * x) / 100}`;
                }
            } else {
                hasil = "Masukkan angka yang valid";
            }

            document.getElementById('hasil').innerText = hasil;
        }

        // Tambahkan event listener untuk menangani tombol Enter
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                document.getElementById("hitungButton").click();
            }
        });

        // Tambahkan event listener untuk tombol panah atas/bawah
        document.addEventListener("keydown", function(event) {
            let nilaiInput = document.getElementById("nilai");
            let persenInput = document.getElementById("persen");

            if (document.activeElement === nilaiInput || document.activeElement === persenInput) {
                if (event.key === "ArrowUp") {
                    document.activeElement.stepUp();
                } else if (event.key === "ArrowDown") {
                    document.activeElement.stepDown();
                }
            }
        });
    </script>
</body>

</html>
