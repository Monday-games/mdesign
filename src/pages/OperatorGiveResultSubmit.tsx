import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OperatorGiveResultSubmit.module.css";

const OperatorGiveResultSubmit: FunctionComponent = () => {
  const navigate = useNavigate();

  const onResultbuttonsClick = useCallback(() => {
    navigate("/operatorgive-result-confirm");
  }, [navigate]);

  return (
    <div className={styles.operatorgiveResultSubmit}>
      <div className={styles.page}>
        <header className={styles.header1}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.toolbarWrapper}>
            <div className={styles.toolbar}>
              <div className={styles.iconWrapper}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
              </div>
              <div className={styles.iconWrapper1}>
                <img
                  className={styles.questioncircleIcon}
                  alt=""
                  src="/questioncircle.svg"
                />
              </div>
              <div className={styles.badgeonIcon}>
                <div className={styles.icon}>
                  <img
                    className={styles.bellIcon}
                    loading="lazy"
                    alt=""
                    src="/bell.svg"
                  />
                </div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.offset}>
                    <div className={styles.badgecount}>
                      <div className={styles.badge}>
                        <a className={styles.number}>11</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.layoutblockshorizontal2}>
                <div className={styles.iconWrapper2}>
                  <img
                    className={styles.settingIcon}
                    loading="lazy"
                    alt=""
                    src="/setting.svg"
                  />
                </div>
                <div className={styles.texttextWrapper}>
                  <div className={styles.texttext}>
                    <a className={styles.content}>Operator</a>
                  </div>
                </div>
              </div>
              <div className={styles.iconWrapper3}>
                <img
                  className={styles.languageIcon}
                  alt=""
                  src="/language.svg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.headermatch}>
          <div className={styles.headerBackground} />
          <div className={styles.matchInfoWrapperParent}>
            <div className={styles.matchInfoWrapper}>
              <div className={styles.matchTeams}>
                <div className={styles.matchTeamsInner}>
                  <div className={styles.image11Parent}>
                    <img
                      className={styles.image11Icon}
                      loading="lazy"
                      alt=""
                      src="/image-112@2x.png"
                    />
                    <div className={styles.teamOneName}>
                      <b className={styles.vs}>VS</b>
                    </div>
                    <img
                      className={styles.image12Icon}
                      loading="lazy"
                      alt=""
                      src="/image-122@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.matchStatus}>
                <div className={styles.texttextParent}>
                  <div className={styles.texttext1}>
                    <a className={styles.statusContent}>India VS Pakistan</a>
                  </div>
                  <div className={styles.texttext2}>
                    <div className={styles.text}>
                      T20 World cup, Group stage
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.matchDetails}>
                <div className={styles.texttextGroup}>
                  <div className={styles.texttext3}>
                    <div className={styles.detailLabel}>Match time</div>
                  </div>
                  <div className={styles.detailValue}>
                    <div className={styles.value}>07:30 pm to 11:30 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.matchActions}>
              <div className={styles.actionsWrapper}>
                <div className={styles.actionButtonParent}>
                  <div className={styles.actionButton}>
                    <div className={styles.texttext4}>
                      <div className={styles.actionLabel}>Match tiner</div>
                    </div>
                  </div>
                  <div className={styles.actionValue}>
                    <a className={styles.value1}>00:00 minutes</a>
                  </div>
                </div>
                <div className={styles.liveButton}>
                  <button className={styles.button}>
                    <div className={styles.a}>End 1st Inning</div>
                    <div className={styles.iconWrapper4}>
                      <img
                        className={styles.wrapperIcon}
                        alt=""
                        src="/wrapper@2x.png"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ballRunning}>
        <div className={styles.ballrunning}>
          <div className={styles.runningBackground} />
          <div className={styles.marketIdParent}>
            <div className={styles.marketId}>
              <div className={styles.marketIdWrapper}>
                <div className={styles.marketId123456}>Market ID #123456</div>
              </div>
              <div className={styles.overBackgroundParent}>
                <div className={styles.overBackground} />
                <b className={styles.over0120}>Over 0.1/20</b>
              </div>
            </div>
            <div className={styles.marketTime}>
              <div className={styles.marketTimeWrapper}>
                <div className={styles.timeValue}>
                  <div className={styles.marketTimeParent}>
                    <div className={styles.marketTime1}>Market time</div>
                    <div className={styles.timeContent}>00:00</div>
                  </div>
                </div>
                <button className={styles.button1}>
                  <div className={styles.iconWrapper5}>
                    <img
                      className={styles.wrapperIcon1}
                      alt=""
                      src="/wrapper-13@2x.png"
                    />
                  </div>
                  <div className={styles.timeLabel}>Market on</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.marketList}>
        <section className={styles.listWrapper}>
          <div className={styles.listContent}>
            <div className={styles.allMarketdefault}>
              <div className={styles.marketBackground} />
              <b className={styles.allMarkets}>All markets</b>
              <div className={styles.itemsCount}>
                <div className={styles.dropdownContent}>
                  <div className={styles.componentstablegacy}>
                    <div className={styles.tab}>
                      <div className={styles.title}>Default</div>
                    </div>
                    <div className={styles.ink} />
                  </div>
                </div>
                <div className={styles.componentstablegacy1}>
                  <div className={styles.tab1}>
                    <div className={styles.title1}>Betting side</div>
                  </div>
                </div>
                <div className={styles.dropdownItemThree}>
                  <div className={styles.componentstablegacy2}>
                    <div className={styles.tab2}>
                      <div className={styles.title2}>Balling side</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.setvalues}>
              <div className={styles.setValuesArea} />
              <div className={styles.setValuesLabel}>
                <div className={styles.setValuesOn}>Set values on actions</div>
              </div>
              <div className={styles.valueContainer}>
                <div className={styles.valueWrapper}>
                  <div className={styles.valueBackgroundsParent}>
                    <div className={styles.valueBackgrounds} />
                    <div className={styles.inputFields}>
                      <div className={styles.run1Parent}>
                        <img
                          className={styles.run1Icon}
                          loading="lazy"
                          alt=""
                          src="/1run-1.svg"
                        />
                        <div className={styles.runLabels}>
                          <div className={styles.run}>run</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wideInput}>
                    <div className={styles.inputNumber}>
                      <div className={styles.wrapper}>
                        <div className={styles.input}>
                          <div className={styles.input1}>3</div>
                          <div className={styles.cursor}>
                            <div className={styles.cursor1} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputNumberHandler}>
                        <div className={styles.divider}>
                          <img
                            className={styles.lineIcon}
                            loading="lazy"
                            alt=""
                            src="/line.svg"
                          />
                        </div>
                        <div className={styles.handlerWrap}>
                          <div className={styles.up}>
                            <img
                              className={styles.upIcon}
                              loading="lazy"
                              alt=""
                              src="/up.svg"
                            />
                          </div>
                          <div className={styles.divider1}>
                            <img
                              className={styles.lineIcon1}
                              loading="lazy"
                              alt=""
                              src="/line-1.svg"
                            />
                          </div>
                          <div className={styles.down}>
                            <img
                              className={styles.downIcon}
                              loading="lazy"
                              alt=""
                              src="/down.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.lbwAreaParent}>
                    <div className={styles.lbwArea} />
                    <div className={styles.sixInput}>
                      <div className={styles.run1Group}>
                        <img
                          className={styles.run1Icon1}
                          loading="lazy"
                          alt=""
                          src="/2run-1.svg"
                        />
                        <div className={styles.outLabel}>
                          <div className={styles.runs}>runs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber1}>
                    <input
                      className={styles.input2}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.valueContainer1}>
                <div className={styles.frameGroup}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameWrapper}>
                      <div className={styles.fourParent}>
                        <img
                          className={styles.fourIcon}
                          loading="lazy"
                          alt=""
                          src="/four@2x.png"
                        />
                        <div className={styles.runsWrapper}>
                          <div className={styles.runs1}>runs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber2}>
                    <input
                      className={styles.input3}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameDiv}>
                      <div className={styles.sixParent}>
                        <img
                          className={styles.sixIcon}
                          loading="lazy"
                          alt=""
                          src="/six@2x.png"
                        />
                        <div className={styles.runsContainer}>
                          <div className={styles.runs2}>runs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber3}>
                    <input
                      className={styles.input4}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.valueContainer2}>
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.frameWrapper1}>
                      <div className={styles.boldParent}>
                        <img
                          className={styles.boldIcon}
                          loading="lazy"
                          alt=""
                          src="/bold@2x.png"
                        />
                        <div className={styles.boldWrapper}>
                          <div className={styles.bold}>Bold</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber4}>
                    <input
                      className={styles.input5}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.groupDiv}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.frameWrapper2}>
                      <div className={styles.runoutParent}>
                        <img
                          className={styles.runoutIcon}
                          loading="lazy"
                          alt=""
                          src="/runout@2x.png"
                        />
                        <div className={styles.runoutWrapper}>
                          <div className={styles.runout}>Runout</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber5}>
                    <input
                      className={styles.input6}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.valueContainer3}>
                <div className={styles.frameParent3}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameWrapper3}>
                      <div className={styles.catchoutParent}>
                        <img
                          className={styles.catchoutIcon}
                          loading="lazy"
                          alt=""
                          src="/catchout@2x.png"
                        />
                        <div className={styles.catchoutWrapper}>
                          <div className={styles.catchout}>Catchout</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber6}>
                    <input
                      className={styles.input7}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild2} />
                    <div className={styles.frameWrapper4}>
                      <div className={styles.stumppingParent}>
                        <img
                          className={styles.stumppingIcon}
                          loading="lazy"
                          alt=""
                          src="/stumpping@2x.png"
                        />
                        <div className={styles.stumpingWrapper}>
                          <div className={styles.stumping}>Stumping</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber7}>
                    <input
                      className={styles.input8}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.valueContainer4}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.backgroundTopParent}>
                      <div className={styles.backgroundTop} />
                      <div className={styles.frameWrapper5}>
                        <div className={styles.wideballParent}>
                          <img
                            className={styles.wideballIcon}
                            loading="lazy"
                            alt=""
                            src="/wideball@2x.png"
                          />
                          <div className={styles.fourRuns}>
                            <div className={styles.wideBall}>Wide ball</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber8}>
                      <input
                        className={styles.input9}
                        placeholder="3"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.rectangleParent3}>
                      <div className={styles.frameChild3} />
                      <div className={styles.frameWrapper6}>
                        <div className={styles.noballParent}>
                          <img
                            className={styles.noballIcon}
                            loading="lazy"
                            alt=""
                            src="/noball@2x.png"
                          />
                          <div className={styles.noBallLabel}>
                            <div className={styles.noBall}>No ball</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber9}>
                      <input
                        className={styles.input10}
                        placeholder="3"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.lbwShapeParent}>
                      <div className={styles.lbwShape} />
                      <div className={styles.lbwIcon}>
                        <div className={styles.lbwParent}>
                          <img
                            className={styles.lbwIcon1}
                            alt=""
                            src="/lbw@2x.png"
                          />
                          <div className={styles.lbwWrapper}>
                            <div className={styles.lbw}>LBW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber10}>
                      <input
                        className={styles.input11}
                        placeholder="3"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.frameChild4} />
                      <div className={styles.frameWrapper7}>
                        <div className={styles.dotballParent}>
                          <img
                            className={styles.dotballIcon}
                            alt=""
                            src="/dotball@2x.png"
                          />
                          <div className={styles.dotBallLabel}>
                            <div className={styles.dotBall}>Dot ball</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber11}>
                      <input
                        className={styles.input12}
                        placeholder="3"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.valueContainer5}>
                <div className={styles.frameParent11}>
                  <div className={styles.frameParent12}>
                    <div className={styles.rectangleParent5}>
                      <div className={styles.frameChild5} />
                      <div className={styles.noball4runWrapper}>
                        <div className={styles.noball4run}>
                          <img
                            className={styles.noballIcon1}
                            loading="lazy"
                            alt=""
                            src="/noball-1@2x.png"
                          />
                          <img
                            className={styles.fourIcon1}
                            loading="lazy"
                            alt=""
                            src="/four-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber12}>
                      <input
                        className={styles.input13}
                        placeholder="3"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.rectangleParent6}>
                      <div className={styles.frameChild6} />
                      <div className={styles.wideball4runsWrapper}>
                        <div className={styles.wideball4runs}>
                          <img
                            className={styles.wideIcon}
                            loading="lazy"
                            alt=""
                            src="/wide@2x.png"
                          />
                          <img
                            className={styles.fourIcon2}
                            loading="lazy"
                            alt=""
                            src="/four-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputNumber13}>
                      <div className={styles.input14}>
                        <div className={styles.input15}>3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.frameChild7} />
                    <div className={styles.noball6runWrapper}>
                      <div className={styles.noball6run}>
                        <img
                          className={styles.noballIcon2}
                          loading="lazy"
                          alt=""
                          src="/noball-2@2x.png"
                        />
                        <img
                          className={styles.sixIcon1}
                          loading="lazy"
                          alt=""
                          src="/six-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputNumber14}>
                    <input
                      className={styles.input16}
                      placeholder="3"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.liveData}>
            <div className={styles.livedataemptystate}>
              <div className={styles.totalBets}>
                <div className={styles.dataShapes} />
                <div className={styles.dataCoinsParent}>
                  <b className={styles.dataCoins}>420</b>
                  <div className={styles.totalBets1}>Total bets</div>
                </div>
              </div>
              <div className={styles.totalEarnings}>
                <div className={styles.totalEarningsChild} />
                <div className={styles.coinsParent}>
                  <b className={styles.coins}>50000 coins</b>
                  <div className={styles.totalEarnings1}>Total earnings</div>
                </div>
              </div>
              <div className={styles.totalLosses}>
                <div className={styles.totalLossesChild} />
                <div className={styles.coinsGroup}>
                  <b className={styles.coins1}>1000 coins</b>
                  <div className={styles.totalLosses1}>Total losses</div>
                </div>
              </div>
            </div>
            <div className={styles.livebetdataenable}>
              <div className={styles.liveDataArea} />
              <div className={styles.dataContainerParent}>
                <div className={styles.dataContainer}>
                  <div className={styles.betsContainer}>
                    <div className={styles.betHeader}>
                      <div className={styles.actionLabel1}>
                        <div className={styles.actions}>Actions</div>
                      </div>
                      <div className={styles.valueLabel}>
                        <div className={styles.values}>Values</div>
                      </div>
                      <div className={styles.bets}>#Bets</div>
                      <div className={styles.betAmount}>Bet amount</div>
                    </div>
                    <div className={styles.projectedLose}>Projected lose</div>
                  </div>
                </div>
                <div className={styles.actionsColumnParent}>
                  <div className={styles.actionsColumn}>
                    <div className={styles.actionsRow}>
                      <div className={styles.resultItems}>
                        <div className={styles.resultShapesParent}>
                          <div className={styles.resultShapes} />
                          <div className={styles.frameParent15}>
                            <div className={styles.frameWrapper8}>
                              <div className={styles.frameParent16}>
                                <div className={styles.four2Parent}>
                                  <img
                                    className={styles.four2Icon}
                                    loading="lazy"
                                    alt=""
                                    src="/four-21@2x.png"
                                  />
                                  <div className={styles.fourCircle} />
                                  <b className={styles.fourLabel}>1</b>
                                </div>
                                <div className={styles.runWrapper}>
                                  <div className={styles.run1}>run</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.wicketIcon}>
                              <div className={styles.boldIcon1}>0.40</div>
                            </div>
                            <div className={styles.outIcon}>
                              <div className={styles.lbwIconContainer}>05</div>
                            </div>
                            <div className={styles.dotBallIcon}>
                              <div className={styles.noBallIcon}>10,000</div>
                            </div>
                            <div className={styles.sixIcon2}>
                              <div className={styles.wideIcon1}>4000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.actionButtonsParent}>
                        <div className={styles.actionButtons} />
                        <div className={styles.runButtons}>
                          <div className={styles.runsParent}>
                            <div className={styles.runs3}>runs</div>
                            <img
                              className={styles.four2Icon1}
                              loading="lazy"
                              alt=""
                              src="/four-21@2x.png"
                            />
                            <div className={styles.runCircle} />
                            <b className={styles.runSeparator}>2</b>
                          </div>
                          <div className={styles.runsFrame}>
                            <div className={styles.runs4}>runs</div>
                          </div>
                        </div>
                        <div className={styles.emptyItemsWrapper}>
                          <div className={styles.emptyItems}>2.50</div>
                        </div>
                        <div className={styles.emptyItem}>
                          <div className={styles.emptyPlaceholder}>05</div>
                        </div>
                        <div className={styles.emptyElement}>
                          <div className={styles.emptySpace}>10,000</div>
                        </div>
                        <div className={styles.emptyContainer}>
                          <div className={styles.emptyContent}>4000</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.matchResults}>
                      <div className={styles.resultbuttonsParent}>
                        <button
                          className={styles.resultbuttons}
                          onClick={onResultbuttonsClick}
                        >
                          <div className={styles.button2}>
                            <div className={styles.iconWrapper6}>
                              <img
                                className={styles.wrapperIcon2}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text1}>Submit</div>
                          </div>
                        </button>
                        <button className={styles.resultbuttons1}>
                          <div className={styles.button3}>
                            <div className={styles.iconWrapper7}>
                              <img
                                className={styles.wrapperIcon3}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text2}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn1}>
                    <div className={styles.frameParent17}>
                      <div className={styles.rectangleParent8}>
                        <div className={styles.frameChild8} />
                        <div className={styles.resultLabels}>
                          <img
                            className={styles.four2Icon2}
                            loading="lazy"
                            alt=""
                            src="/four-21@2x.png"
                          />
                          <div className={styles.runsLabel}>
                            <div className={styles.runs5}>runs</div>
                          </div>
                        </div>
                        <div className={styles.matchBackgroundWrapper}>
                          <div className={styles.matchBackground}>6.00</div>
                        </div>
                        <div className={styles.matchContent}>
                          <div className={styles.matchDetails1}>05</div>
                        </div>
                        <div className={styles.matchStats}>
                          <div className={styles.matchTeams1}>10,000</div>
                        </div>
                        <div className={styles.matchInfo}>
                          <div className={styles.teamLogos}>4000</div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent9}>
                        <div className={styles.frameChild9} />
                        <div className={styles.six2Parent}>
                          <img
                            className={styles.six2Icon}
                            loading="lazy"
                            alt=""
                            src="/six-22@2x.png"
                          />
                          <div className={styles.runsWrapper1}>
                            <div className={styles.runs6}>runs</div>
                          </div>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.div}>8.00</div>
                        </div>
                        <div className={styles.frame}>
                          <div className={styles.div1}>05</div>
                        </div>
                        <div className={styles.wrapper1}>
                          <div className={styles.div2}>10,000</div>
                        </div>
                        <div className={styles.wrapper2}>
                          <div className={styles.div3}>4000</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.actionsColumnInner}>
                      <div className={styles.resultbuttonsGroup}>
                        <button className={styles.resultbuttons2}>
                          <div className={styles.button4}>
                            <div className={styles.iconWrapper8}>
                              <img
                                className={styles.wrapperIcon4}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text3}>Submit</div>
                          </div>
                        </button>
                        <button className={styles.resultbuttons3}>
                          <div className={styles.button5}>
                            <div className={styles.iconWrapper9}>
                              <img
                                className={styles.wrapperIcon5}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text4}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn2}>
                    <div className={styles.frameParent18}>
                      <div className={styles.rectangleParent10}>
                        <div className={styles.frameChild10} />
                        <div className={styles.wicket12Parent}>
                          <img
                            className={styles.wicket12}
                            loading="lazy"
                            alt=""
                            src="/wicket-1-21@2x.png"
                          />
                          <div className={styles.boldContainer}>
                            <div className={styles.bold1}>Bold</div>
                          </div>
                        </div>
                        <div className={styles.wrapper3}>
                          <div className={styles.div4}>21.00</div>
                        </div>
                        <div className={styles.wrapper4}>
                          <div className={styles.div5}>05</div>
                        </div>
                        <div className={styles.wrapper5}>
                          <div className={styles.div6}>10,000</div>
                        </div>
                        <div className={styles.wrapper6}>
                          <div className={styles.div7}>4000</div>
                        </div>
                      </div>
                      <div className={styles.resultbuttonsWrapper}>
                        <button className={styles.resultbuttons4}>
                          <div className={styles.button6}>
                            <div className={styles.iconWrapper10}>
                              <img
                                className={styles.wrapperIcon6}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text5}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.frameParent20}>
                        <div className={styles.rectangleParent11}>
                          <div className={styles.frameChild11} />
                          <div className={styles.outcomeOptions}>
                            <div className={styles.runoutGroup}>
                              <img
                                className={styles.runoutIcon1}
                                loading="lazy"
                                alt=""
                                src="/runout-11@2x.png"
                              />
                              <div className={styles.dismissalLabels}>
                                <div className={styles.runout1}>Runout</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.emptyResultPlaceholder}>
                          0.40
                        </div>
                        <div className={styles.emptyResultItemWrapper}>
                          <div className={styles.emptyResultItem}>05</div>
                        </div>
                        <div className={styles.emptyResultPlaceholder1}>
                          10,000
                        </div>
                        <div className={styles.emptyResultElement}>4000</div>
                      </div>
                      <div className={styles.secondaryResults}>
                        <button className={styles.resultbuttons5}>
                          <div className={styles.button7}>
                            <div className={styles.iconWrapper11}>
                              <img
                                className={styles.wrapperIcon7}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text6}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn3}>
                    <div className={styles.frameParent21}>
                      <div className={styles.frameParent22}>
                        <div className={styles.rectangleParent12}>
                          <div className={styles.frameChild12} />
                          <div className={styles.frameWrapper9}>
                            <div className={styles.stumppingGroup}>
                              <img
                                className={styles.stumppingIcon1}
                                loading="lazy"
                                alt=""
                                src="/stumpping-11@2x.png"
                              />
                              <div className={styles.actionLabels}>
                                <div className={styles.stumping1}>Stumping</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div8}>2.50</div>
                        <div className={styles.wrapper7}>
                          <div className={styles.div9}>05</div>
                        </div>
                        <div className={styles.div10}>10,000</div>
                        <div className={styles.div11}>4000</div>
                      </div>
                      <div className={styles.resultbuttonsContainer}>
                        <button className={styles.resultbuttons6}>
                          <div className={styles.button8}>
                            <div className={styles.iconWrapper12}>
                              <img
                                className={styles.wrapperIcon8}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text7}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.frameParent23}>
                      <div className={styles.frameParent24}>
                        <div className={styles.rectangleParent13}>
                          <div className={styles.frameChild13} />
                          <div className={styles.frameWrapper10}>
                            <div className={styles.noballGroup}>
                              <img
                                className={styles.noballIcon3}
                                alt=""
                                src="/noball-31@2x.png"
                              />
                              <div className={styles.noBallWrapper}>
                                <div className={styles.noBall1}>No ball</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div12}>6.00</div>
                        <div className={styles.wrapper8}>
                          <div className={styles.div13}>05</div>
                        </div>
                        <div className={styles.div14}>10,000</div>
                        <div className={styles.div15}>4000</div>
                      </div>
                      <div className={styles.resultbuttonsFrame}>
                        <button className={styles.resultbuttons7}>
                          <div className={styles.button9}>
                            <div className={styles.iconWrapper13}>
                              <img
                                className={styles.wrapperIcon9}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text8}>Submit</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn4}>
                    <div className={styles.frameParent25}>
                      <div className={styles.frameParent26}>
                        <div className={styles.rectangleParent14}>
                          <div className={styles.frameChild14} />
                          <div className={styles.frameWrapper11}>
                            <div className={styles.dotballGroup}>
                              <img
                                className={styles.dotballIcon1}
                                alt=""
                                src="/dotball-1@2x.png"
                              />
                              <div className={styles.dotBallWrapper}>
                                <div className={styles.dotBall1}>Dot ball</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div16}>8.00</div>
                        <div className={styles.wrapper9}>
                          <div className={styles.div17}>05</div>
                        </div>
                        <div className={styles.div18}>10,000</div>
                        <div className={styles.div19}>4000</div>
                      </div>
                      <div className={styles.frameParent27}>
                        <div className={styles.rectangleParent15}>
                          <div className={styles.frameChild15} />
                          <div className={styles.runOptions}>
                            <div className={styles.noball6run1}>
                              <img
                                className={styles.noballIcon4}
                                alt=""
                                src="/noball-31@2x.png"
                              />
                              <img
                                className={styles.sixIcon3}
                                alt=""
                                src="/six-22@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.div20}>21.00</div>
                        <div className={styles.wrapper10}>
                          <div className={styles.div21}>05</div>
                        </div>
                        <div className={styles.div22}>10,000</div>
                        <div className={styles.div23}>4000</div>
                      </div>
                    </div>
                    <div className={styles.actionsColumnChild}>
                      <div className={styles.resultbuttonsParent1}>
                        <button className={styles.resultbuttons8}>
                          <div className={styles.button10}>
                            <div className={styles.iconWrapper14}>
                              <img
                                className={styles.wrapperIcon10}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text9}>Submit</div>
                          </div>
                        </button>
                        <div className={styles.resultbuttons9}>
                          <div className={styles.button11}>
                            <div className={styles.iconWrapper15}>
                              <img
                                className={styles.wrapperIcon11}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text10}>Submit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn5}>
                    <div className={styles.frameParent28}>
                      <div className={styles.frameParent29}>
                        <div className={styles.rectangleParent16}>
                          <div className={styles.frameChild16} />
                          <div className={styles.frameWrapper12}>
                            <div className={styles.catchoutGroup}>
                              <img
                                className={styles.catchoutIcon1}
                                alt=""
                                src="/catchout-11@2x.png"
                              />
                              <div className={styles.catchoutContainer}>
                                <div className={styles.catchout1}>Catchout</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div24}>0.40</div>
                        <div className={styles.wrapper11}>
                          <div className={styles.div25}>05</div>
                        </div>
                        <div className={styles.div26}>10,000</div>
                        <div className={styles.div27}>4000</div>
                      </div>
                      <div className={styles.frameParent30}>
                        <div className={styles.rectangleParent17}>
                          <div className={styles.frameChild17} />
                          <div className={styles.frameWrapper13}>
                            <div className={styles.wideballGroup}>
                              <img
                                className={styles.wideballIcon1}
                                alt=""
                                src="/wideball-11@2x.png"
                              />
                              <div className={styles.wideBallWrapper}>
                                <div className={styles.wideBall1}>
                                  Wide ball
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div28}>2.50</div>
                        <div className={styles.wrapper12}>
                          <div className={styles.div29}>05</div>
                        </div>
                        <div className={styles.div30}>10,000</div>
                        <div className={styles.div31}>4000</div>
                      </div>
                    </div>
                    <div className={styles.actionsColumnInner1}>
                      <div className={styles.resultbuttonsParent2}>
                        <div className={styles.resultbuttons10}>
                          <div className={styles.button12}>
                            <div className={styles.iconWrapper16}>
                              <img
                                className={styles.wrapperIcon12}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text11}>Submit</div>
                          </div>
                        </div>
                        <div className={styles.resultbuttons11}>
                          <div className={styles.button13}>
                            <div className={styles.iconWrapper17}>
                              <img
                                className={styles.wrapperIcon13}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text12}>Submit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsColumn6}>
                    <div className={styles.frameParent31}>
                      <div className={styles.frameParent32}>
                        <div className={styles.rectangleParent18}>
                          <div className={styles.frameChild18} />
                          <div className={styles.frameWrapper14}>
                            <div className={styles.lbwGroup}>
                              <img
                                className={styles.lbwIcon2}
                                alt=""
                                src="/lbw-11@2x.png"
                              />
                              <div className={styles.lbwContainer}>
                                <div className={styles.lbw1}>LBW</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.div32}>6.00</div>
                        <div className={styles.wrapper13}>
                          <div className={styles.div33}>05</div>
                        </div>
                        <div className={styles.div34}>10,000</div>
                        <div className={styles.div35}>4000</div>
                      </div>
                      <div className={styles.frameParent33}>
                        <div className={styles.rectangleParent19}>
                          <div className={styles.frameChild19} />
                          <div className={styles.noball4runContainer}>
                            <div className={styles.noball4run1}>
                              <img
                                className={styles.noballIcon5}
                                alt=""
                                src="/noball-31@2x.png"
                              />
                              <img
                                className={styles.fourIcon3}
                                alt=""
                                src="/four-21@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.div36}>8.00</div>
                        <div className={styles.wrapper14}>
                          <div className={styles.div37}>05</div>
                        </div>
                        <div className={styles.div38}>10,000</div>
                        <div className={styles.div39}>4000</div>
                      </div>
                    </div>
                    <div className={styles.actionsColumnInner2}>
                      <div className={styles.resultbuttonsParent3}>
                        <div className={styles.resultbuttons12}>
                          <div className={styles.button14}>
                            <div className={styles.iconWrapper18}>
                              <img
                                className={styles.wrapperIcon14}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text13}>Submit</div>
                          </div>
                        </div>
                        <div className={styles.resultbuttons13}>
                          <div className={styles.button15}>
                            <div className={styles.iconWrapper19}>
                              <img
                                className={styles.wrapperIcon15}
                                alt=""
                                src="/wrapper-21@2x.png"
                              />
                            </div>
                            <div className={styles.text14}>Submit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent34}>
                <div className={styles.frameParent35}>
                  <div className={styles.wideRunsBackgroundParent}>
                    <div className={styles.wideRunsBackground} />
                    <div className={styles.wideRunsInput}>
                      <div className={styles.wideball4runs1}>
                        <img
                          className={styles.wideIcon2}
                          alt=""
                          src="/wideball-11@2x.png"
                        />
                        <img
                          className={styles.fourIcon4}
                          alt=""
                          src="/four-21@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputFields1}>21.00</div>
                  <div className={styles.spacer}>
                    <div className={styles.div40}>05</div>
                  </div>
                  <div className={styles.inputFields2}>10,000</div>
                  <div className={styles.inputFields3}>4000</div>
                </div>
                <div className={styles.resultbuttonsWrapper1}>
                  <div className={styles.resultbuttons14}>
                    <div className={styles.button16}>
                      <div className={styles.iconWrapper20}>
                        <img
                          className={styles.wrapperIcon16}
                          alt=""
                          src="/wrapper-21@2x.png"
                        />
                      </div>
                      <div className={styles.text15}>Submit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OperatorGiveResultSubmit;
