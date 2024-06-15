import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./Livebetdatadisable.module.css";

export type LivebetdatadisableType = {
  className?: string;
};

const Livebetdatadisable: FunctionComponent<LivebetdatadisableType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.livebetdatadisable, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.dataLabels}>
          <div className={styles.frameParent}>
            <div className={styles.actionButtonParent}>
              <div className={styles.actionButton}>
                <div className={styles.actions}>Actions</div>
              </div>
              <div className={styles.values}>Values</div>
              <div className={styles.bets}>#Bets</div>
            </div>
            <div className={styles.betAmount}>Bet amount</div>
            <div className={styles.projectedLose}>Projected lose</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.actionItemsParent}>
                <div className={styles.actionItems} />
                <div className={styles.runIconsParent}>
                  <div className={styles.runIcons}>
                    <div className={styles.groupDiv}>
                      <div className={styles.four2Parent}>
                        <img
                          className={styles.four2Icon}
                          loading="lazy"
                          alt=""
                          src="/four-2@2x.png"
                        />
                        <div className={styles.ellipseWrapper}>
                          <div className={styles.frameChild} />
                        </div>
                        <b className={styles.fourLabel}>1</b>
                      </div>
                      <div className={styles.runLabel}>
                        <div className={styles.run}>run</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.runLabels}>
                    <div className={styles.div}>0.40</div>
                  </div>
                  <div className={styles.emptyColumn}>
                    <div className={styles.emptyCell}>05</div>
                  </div>
                  <div className={styles.emptyColumn1}>
                    <div className={styles.emptyCell1}>10,000</div>
                  </div>
                  <div className={styles.emptyColumn2}>
                    <div className={styles.emptyCell2}>4000</div>
                  </div>
                </div>
              </div>
              <div className={styles.actionsRow}>
                <button className={styles.button}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.buttonLabels}>Submit</div>
                </button>
              </div>
            </div>
            <div className={styles.dismissalRow}>
              <div className={styles.labelsAndButtonsParent}>
                <div className={styles.labelsAndButtons} />
                <div className={styles.runButtons}>
                  <div className={styles.runsParent}>
                    <div className={styles.runs}>runs</div>
                    <img
                      className={styles.four2Icon1}
                      loading="lazy"
                      alt=""
                      src="/four-2-1@2x.png"
                    />
                    <div className={styles.fourIcon} />
                    <b className={styles.separator}>2</b>
                  </div>
                  <div className={styles.runLabels1}>
                    <div className={styles.runs1}>runs</div>
                  </div>
                </div>
                <div className={styles.separator1}>
                  <div className={styles.separator2}>2.50</div>
                </div>
                <div className={styles.separator3}>
                  <div className={styles.separator4}>05</div>
                </div>
                <div className={styles.separator5}>
                  <div className={styles.separator6}>10,000</div>
                </div>
                <div className={styles.scoreColumn}>
                  <div className={styles.separator7}>4000</div>
                </div>
              </div>
              <div className={styles.outButtons}>
                <button className={styles.button1}>
                  <div className={styles.iconWrapper1}>
                    <img
                      className={styles.wrapperIcon1}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.outButtonLabels}>Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.four2Group}>
                  <img
                    className={styles.four2Icon2}
                    loading="lazy"
                    alt=""
                    src="/four-2-1@2x.png"
                  />
                  <div className={styles.runsWrapper}>
                    <div className={styles.runs2}>runs</div>
                  </div>
                </div>
                <div className={styles.buttonsWrapper}>
                  <div className={styles.buttons}>6.00</div>
                </div>
                <div className={styles.actionColumn}>
                  <div className={styles.separator8}>05</div>
                </div>
                <div className={styles.separator9}>
                  <div className={styles.separator10}>10,000</div>
                </div>
                <div className={styles.scoreColumn1}>
                  <div className={styles.separator11}>4000</div>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.button2}>
                  <div className={styles.iconWrapper2}>
                    <img
                      className={styles.wrapperIcon2}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text}>Submit</div>
                </button>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.six2Parent}>
                  <img
                    className={styles.six2Icon}
                    loading="lazy"
                    alt=""
                    src="/six-2@2x.png"
                  />
                  <div className={styles.runsContainer}>
                    <div className={styles.runs3}>runs</div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div1}>8.00</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>05</div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.div3}>10,000</div>
                </div>
                <div className={styles.wrapper1}>
                  <div className={styles.div4}>4000</div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button3}>
                  <div className={styles.iconWrapper3}>
                    <img
                      className={styles.wrapperIcon3}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text1}>Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.wicket12Parent}>
                  <img
                    className={styles.wicket12}
                    loading="lazy"
                    alt=""
                    src="/wicket-1-2@2x.png"
                  />
                  <div className={styles.boldWrapper}>
                    <div className={styles.bold}>Bold</div>
                  </div>
                </div>
                <div className={styles.wrapper2}>
                  <div className={styles.div5}>21.00</div>
                </div>
                <div className={styles.wrapper3}>
                  <div className={styles.div6}>05</div>
                </div>
                <div className={styles.wrapper4}>
                  <div className={styles.div7}>10,000</div>
                </div>
                <div className={styles.wrapper5}>
                  <div className={styles.div8}>4000</div>
                </div>
              </div>
              <div className={styles.buttonFrame}>
                <button className={styles.button4}>
                  <div className={styles.iconWrapper4}>
                    <img
                      className={styles.wrapperIcon4}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text2}>Submit</div>
                </button>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.dismissalTypesParent}>
                  <div className={styles.dismissalTypes} />
                  <div className={styles.runOutContainer}>
                    <div className={styles.runoutParent}>
                      <img
                        className={styles.runoutIcon}
                        loading="lazy"
                        alt=""
                        src="/runout-1@2x.png"
                      />
                      <div className={styles.outLabels}>
                        <div className={styles.runout}>Runout</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div9}>0.40</div>
                <div className={styles.wrapper6}>
                  <div className={styles.div10}>05</div>
                </div>
                <div className={styles.div11}>10,000</div>
                <div className={styles.div12}>4000</div>
              </div>
              <div className={styles.buttonWrapper1}>
                <button className={styles.button5}>
                  <div className={styles.iconWrapper5}>
                    <img
                      className={styles.wrapperIcon5}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text3}>Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.frameParent9}>
              <div className={styles.frameParent10}>
                <div className={styles.actionIconParent}>
                  <div className={styles.actionIcon} />
                  <div className={styles.frameWrapper}>
                    <div className={styles.stumppingParent}>
                      <img
                        className={styles.stumppingIcon}
                        alt=""
                        src="/stumpping-1@2x.png"
                      />
                      <div className={styles.outLabels1}>
                        <div className={styles.stumping}>Stumping</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div13}>2.50</div>
                <div className={styles.wrapper7}>
                  <div className={styles.div14}>05</div>
                </div>
                <div className={styles.div15}>10,000</div>
                <div className={styles.div16}>4000</div>
              </div>
              <div className={styles.buttonWrapper2}>
                <button className={styles.button6}>
                  <div className={styles.iconWrapper6}>
                    <img
                      className={styles.wrapperIcon6}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text4}>Submit</div>
                </button>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.frameParent12}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameWrapper1}>
                    <div className={styles.noballParent}>
                      <img
                        className={styles.noballIcon}
                        loading="lazy"
                        alt=""
                        src="/noball-3@2x.png"
                      />
                      <div className={styles.noBallWrapper}>
                        <div className={styles.noBall}>No ball</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div17}>6.00</div>
                <div className={styles.wrapper8}>
                  <div className={styles.div18}>05</div>
                </div>
                <div className={styles.div19}>10,000</div>
                <div className={styles.div20}>4000</div>
              </div>
              <div className={styles.buttonWrapper3}>
                <button className={styles.button7}>
                  <div className={styles.iconWrapper7}>
                    <img
                      className={styles.wrapperIcon7}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text5}>Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent13}>
            <FrameComponent3
              dotball="/dotball@2x.png"
              dotBall="Dot ball"
              prop="8.00"
              six="/six-21@2x.png"
              separator="21.00"
            />
            <div className={styles.frameWrapper2}>
              <div className={styles.buttonParent}>
                <button className={styles.button8}>
                  <div className={styles.iconWrapper8}>
                    <img
                      className={styles.wrapperIcon8}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text6}>Submit</div>
                </button>
                <div className={styles.button9}>
                  <div className={styles.iconWrapper9}>
                    <img
                      className={styles.wrapperIcon9}
                      alt=""
                      src="/wrapper-2@2x.png"
                    />
                  </div>
                  <div className={styles.text7}>Submit</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.frameParent15}>
              <div className={styles.frameParent16}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild2} />
                  <div className={styles.frameWrapper3}>
                    <div className={styles.catchoutParent}>
                      <img
                        className={styles.catchoutIcon}
                        alt=""
                        src="/catchout-1@2x.png"
                      />
                      <div className={styles.catchoutWrapper}>
                        <div className={styles.catchout}>Catchout</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div21}>0.40</div>
                <div className={styles.wrapper9}>
                  <div className={styles.div22}>05</div>
                </div>
                <div className={styles.div23}>10,000</div>
                <div className={styles.div24}>4000</div>
              </div>
              <div className={styles.frameParent17}>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild3} />
                  <div className={styles.frameWrapper4}>
                    <div className={styles.wideballParent}>
                      <img
                        className={styles.wideballIcon}
                        alt=""
                        src="/wideball-1@2x.png"
                      />
                      <div className={styles.wideBallWrapper}>
                        <div className={styles.wideBall}>Wide ball</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div25}>2.50</div>
                <div className={styles.wrapper10}>
                  <div className={styles.div26}>05</div>
                </div>
                <div className={styles.div27}>10,000</div>
                <div className={styles.div28}>4000</div>
              </div>
            </div>
            <FrameComponent2 />
          </div>
          <div className={styles.frameParent18}>
            <FrameComponent3
              dotball="/lbw-1@2x.png"
              dotBall="LBW"
              prop="6.00"
              six="/four-3@2x.png"
              separator="8.00"
              propHeight="50px"
              propWidth="54.5px"
              propGap="15.5px"
              propFlex="1"
              propWidth1="18px"
              propFlex1="1"
              propAlignSelf="stretch"
              propHeight1="15px"
              propDisplay="inline-block"
              propAlignSelf1="stretch"
              propHeight2="27px"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
            />
            <FrameComponent2 />
          </div>
        </div>
      </div>
      <div className={styles.frameParent19}>
        <div className={styles.frameParent20}>
          <div className={styles.inputBackgroundParent}>
            <div className={styles.inputBackground} />
            <div className={styles.runsInput}>
              <div className={styles.wideball4runs}>
                <img className={styles.wideIcon} alt="" src="/wide-1@2x.png" />
                <img className={styles.fourIcon1} alt="" src="/four-3@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.separator12}>21.00</div>
          <div className={styles.emptyState}>
            <div className={styles.div29}>05</div>
          </div>
          <div className={styles.separator13}>10,000</div>
          <div className={styles.separator14}>4000</div>
        </div>
        <div className={styles.resetButton}>
          <div className={styles.button10}>
            <div className={styles.iconWrapper10}>
              <img
                className={styles.wrapperIcon10}
                alt=""
                src="/wrapper-2@2x.png"
              />
            </div>
            <div className={styles.resetLabel}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livebetdatadisable;
