import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import animatedLogo from '../images/coderhouse_metaverse_intro.mp4'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinearProgress from '@mui/material/LinearProgress'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CircularProgress from '@mui/material/CircularProgress'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import JoinIcon from '@mui/icons-material/Login'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { CustomRoomTable } from './CustomRoomTable'
import { CreateRoomForm } from './CreateRoomForm'
import { useAppSelector } from '../hooks'

import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'

const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`

const Wrapper = styled.div`
  background: #222639;
  border-radius: 16px;
  padding: 36px 60px;
  box-shadow: 0px 0px 5px #0000006f;
`

const CustomRoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .tip {
    font-size: 18px;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  width: 100%;

  .back-button {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    align-self: center;
  }

  h1 {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`

const Title = styled.h1`
  font-size: 24px;
  color: #eee;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 8px;
    height: 120px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
`

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #33ac96;
  }
`

const ProgressBar = styled(LinearProgress)`
  width: 360px;
`

const JoinRoomDialog = styled(Dialog)`
  .MuiDialog-paper {
    background: #222639;
    color: #eee;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #33ac96;
`

export default function RoomSelectionDialog() {
  const [showCustomRoom, setShowCustomRoom] = useState(false)
  const [showCreateRoomForm, setShowCreateRoomForm] = useState(false)
  const [showJoinRoomDialog, setShowJoinRoomDialog] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [roomId, setRoomId] = useState('')
  const [roomPassword, setRoomPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)

  // Check for room ID in URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const roomIdFromURL = params.get('room')
    if (roomIdFromURL && lobbyJoined) {
      setRoomId(roomIdFromURL)
      setShowJoinRoomDialog(true)
    }
  }, [lobbyJoined])

  const handleConnect = () => {
    if (lobbyJoined) {
      setIsConnecting(true)
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .joinOrCreatePublic()
        .then(() => bootstrap.launchGame())
        .catch((error) => {
          console.error(error)
          setIsConnecting(false)
        })
    } else {
      setShowSnackbar(true)
    }
  }

  const handleJoinRoom = () => {
    if (roomId.trim() && lobbyJoined) {
      setIsConnecting(true)
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .joinCustomById(roomId.trim(), roomPassword || null)
        .then(() => bootstrap.launchGame())
        .catch((error) => {
          console.error(error)
          setIsConnecting(false)
          setShowSnackbar(true)
        })
    }
    setShowJoinRoomDialog(false)
    setRoomId('')
    setRoomPassword('')
  }

  const handleCreateRoom = () => {
    if (lobbyJoined) {
      setShowCreateRoomForm(true)
    } else {
      setShowSnackbar(true)
    }
  }

  const handleExploreRooms = () => {
    if (lobbyJoined) {
      setShowCustomRoom(true)
    } else {
      setShowSnackbar(true)
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          setShowSnackbar(false)
        }}
      >
        <Alert
          severity="error"
          variant="outlined"
          // overwrites the dark theme on render
          style={{ background: '#fdeded', color: '#7d4747' }}
        >
          Trying to connect to server, please try again!
        </Alert>
      </Snackbar>

      <JoinRoomDialog open={showJoinRoomDialog} onClose={() => setShowJoinRoomDialog(false)}>
        <DialogTitle>Join Room by ID</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Room ID"
            type="text"
            fullWidth
            variant="outlined"
            color="secondary"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            margin="dense"
            label="Password (if private room)"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            color="secondary"
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => setShowJoinRoomDialog(false)}>
            Cancel
          </Button>
          <Button 
            color="secondary" 
            onClick={handleJoinRoom} 
            disabled={!roomId.trim() || isConnecting}
          >
            {isConnecting ? (
              <LoadingWrapper>
                <CircularProgress size={16} />
                Connecting...
              </LoadingWrapper>
            ) : (
              'Join'
            )}
          </Button>
        </DialogActions>
      </JoinRoomDialog>

      <Backdrop>
        <Wrapper>
          {showCreateRoomForm ? (
            <CustomRoomWrapper>
              <TitleWrapper>
                <IconButton className="back-button" onClick={() => setShowCreateRoomForm(false)}>
                  <ArrowBackIcon />
                </IconButton>
                <Title>Create Custom Room</Title>
              </TitleWrapper>
              <CreateRoomForm />
            </CustomRoomWrapper>
          ) : showCustomRoom ? (
            <CustomRoomWrapper>
              <TitleWrapper>
                <IconButton className="back-button" onClick={() => setShowCustomRoom(false)}>
                  <ArrowBackIcon />
                </IconButton>
                <Title>
                  Custom Rooms
                  <Tooltip
                    title="We update the results in realtime, no refresh needed!"
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineIcon className="tip" />
                    </IconButton>
                  </Tooltip>
                </Title>
              </TitleWrapper>
              <CustomRoomTable />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setShowCreateRoomForm(true)}
                startIcon={<AddIcon />}
              >
                Create new room
              </Button>
            </CustomRoomWrapper>
          ) : (
            <>
              <Title>Coderhouse Metaverse</Title>
              <Content>
                <video autoPlay muted playsInline loop width="75%">
                  <source src={animatedLogo} type="video/mp4"
                  />
                  <img src={logo}/>
                </video>
                <ButtonGroup>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleConnect}
                    fullWidth
                    disabled={isConnecting}
                  >
                    {isConnecting ? (
                      <LoadingWrapper>
                        <CircularProgress size={16} />
                        Connecting...
                      </LoadingWrapper>
                    ) : (
                      'Join Public Lobby'
                    )}
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleExploreRooms}
                    fullWidth
                    startIcon={<AddIcon />}
                  >
                    Explore Custom Rooms
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCreateRoom}
                    fullWidth
                    startIcon={<AddIcon />}
                  >
                    Create New Room
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setShowJoinRoomDialog(true)}
                    fullWidth
                    startIcon={<JoinIcon />}
                  >
                    Join Room by ID
                  </Button>
                </ButtonGroup>
              </Content>
            </>
          )}
        </Wrapper>
        {!lobbyJoined && (
          <ProgressBarWrapper>
            <h3> Connecting to server...</h3>
            <ProgressBar color="secondary" />
          </ProgressBarWrapper>
        )}
      </Backdrop>
    </>
  )
}
