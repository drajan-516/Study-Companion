export async function getHome(app) {
    app.innerHTML = `
        <div class="mainСontainer">
        <div class="lineGroup Left">
            <span></span><span></span><span></span>
        </div>
        <div class="lineGroup Right">
            <span></span><span></span><span></span>
        </div>

        <header class="banner">
            <div class="charImageWrapper">
            </div>
            <div class="figureСontainer">
            <h1 class="bgTitleBack">NEKOMATA</h1>
                <div class="content">
                    <div class="custom-shape">
                        <div class="text-content">
                          </p> Meet Nekomata, your loyal 
                          learning assistant who stays right by your side until 
                          the timer runs out. No matter how long your study 
                         session lasts, Nekomata remains with you — focused, 
                        patient, and fully attentive.</p>
                        </div>
                    </div>
                </div>
                <img src="/src/Shared/UI/sprites/nekomataFull.png" alt="Nekomata" class="charImg">
                    <h1 class="bgTitleFront">NEKOMATA</h1>
            </div>
           
        </header>

        <section class="descriptionSection">
            <div class="descBox">
                <p>Struggling to understand a difficult topic? 
                Trying to memorize complex material but it just won't stick? 
                Nekomata listens carefully to every concern you share. 
                Whether you need to talk through a challenging math problem, 
                organize your notes, or simply repeat information out loud to remember it better, 
                Nekomata is always ready to help.</p>
            </div>
            <div class="characterPreview">
               <img src="/src/Shared/UI/sprites/nekomataFull.png" alt="NekomataPreview" class="charMini">
            </div>
        </section>

        <section class="timerSection">
            <div class="quoteBanner">
                <p>You are not alone — you have a curious, attentive companion who truly wants to see you succeed.</p>
                <div class="yellowTape">NYA! NYA! NYA!</div>
            </div>

            <div class="timerDisplay">
                <div class="circle">
                    <span class="time">00:00</span>
                </div>
            </div>

            <p class="timerSubtext">Start your timer, and let Nekomata stay with you until the very last second!</p>
            
            <button class="startBtn">START</button>
        </section>

        <footer class="footer">
            <div class="footerBottom">
                <div class="socials">
                    <img src="" alt="icon">
                    <img src="" alt="icon">
                    <img src="" alt="icon">
                </div>
                <div class="footerText">
                    <p>日本の店</p>
                    <p>日本の店日本の店日本の店日本の店</p>
                </div>
            </div>
        </footer>
    </div>
    `;
}
